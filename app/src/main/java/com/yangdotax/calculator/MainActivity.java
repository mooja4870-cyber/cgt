package com.yangdotax.calculator;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.content.res.Configuration;
import android.os.Build;
import android.os.Bundle;
import android.view.ViewGroup;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MainActivity extends Activity {
    private WebView webView;
    private static final long REMINDER_INTERVAL_MS = 30L * 24 * 60 * 60 * 1000; // 약 30일

    @SuppressLint("SetJavaScriptEnabled")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        webView = new WebView(this);
        webView.setLayoutParams(new ViewGroup.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT
        ));
        webView.setWebViewClient(new WebViewClient());

        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setDatabaseEnabled(true);
        settings.setAllowFileAccess(true);
        settings.setAllowContentAccess(true);
        settings.setLoadWithOverviewMode(false);
        settings.setUseWideViewPort(true);   // viewport 메타태그 적용 → 가로/세로 모드 반응형 레이아웃
        settings.setTextZoom(100);

        // ✅ 핀치줌 명시적 활성화 — 구버전 안드로이드(갤럭시 노트20 등)에서 필수
        // 이 설정 없으면 기기/버전에 따라 핀치줌이 안 될 수 있음
        settings.setBuiltInZoomControls(true);      // 줌 컨트롤 켜기 (기본 +/- 버튼)
        settings.setDisplayZoomControls(false);     // 기본 +/- 버튼은 숨기고 (UI 깔끔함)
        settings.setSupportZoom(true);              // 핀치 제스처 줌 활성화 (매우 중요!)

        setContentView(webView);
        webView.loadUrl("file:///android_asset/yangdo_tax_calculator.html");

        // 월 1회 절세 리포트 알림: 권한 요청 + 주기 알람 등록
        requestNotificationPermissionIfNeeded();
        scheduleMonthlyReminder();
    }

    /** Android 13+ 알림 런타임 권한 요청 */
    private void requestNotificationPermissionIfNeeded() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            if (checkSelfPermission(android.Manifest.permission.POST_NOTIFICATIONS)
                    != PackageManager.PERMISSION_GRANTED) {
                requestPermissions(
                        new String[]{android.Manifest.permission.POST_NOTIFICATIONS}, 9001);
            }
        }
    }

    /** 약 30일 주기로 절세 리포트 알림을 예약(중복 등록 시 갱신). 정확 알람 권한 불필요(inexact). */
    private void scheduleMonthlyReminder() {
        AlarmManager am = (AlarmManager) getSystemService(Context.ALARM_SERVICE);
        if (am == null) return;
        Intent i = new Intent(this, ReminderReceiver.class);
        int flags = PendingIntent.FLAG_UPDATE_CURRENT;
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
            flags |= PendingIntent.FLAG_IMMUTABLE;
        }
        PendingIntent pi = PendingIntent.getBroadcast(this, 1000, i, flags);
        long first = System.currentTimeMillis() + REMINDER_INTERVAL_MS;
        am.setInexactRepeating(AlarmManager.RTC, first, REMINDER_INTERVAL_MS, pi);
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        // 화면 회전 시 Activity 재생성 없이 WebView 레이아웃만 재조정
        super.onConfigurationChanged(newConfig);
        if (webView != null) {
            webView.requestLayout();
        }
    }

    @Override
    public void onBackPressed() {
        if (webView != null && webView.canGoBack()) {
            webView.goBack();
            return;
        }
        super.onBackPressed();
    }

    @Override
    protected void onDestroy() {
        if (webView != null) {
            webView.destroy();
            webView = null;
        }
        super.onDestroy();
    }
}

