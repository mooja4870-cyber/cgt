package com.yangdotax.calculator;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.res.Configuration;
import android.os.Bundle;
import android.view.ViewGroup;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MainActivity extends Activity {
    private WebView webView;

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

