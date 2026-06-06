package com.yangdotax.calculator;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.Build;

/**
 * 월 1회 절세 리포트 로컬 알림을 표시하는 BroadcastReceiver.
 * AlarmManager(setInexactRepeating)로 약 30일 주기로 트리거된다.
 * AndroidX/WorkManager 의존성 없이 프레임워크 API만 사용.
 */
public class ReminderReceiver extends BroadcastReceiver {

    static final String CHANNEL_ID = "monthly_report";
    private static final int NOTI_ID = 2001;

    @Override
    public void onReceive(Context context, Intent intent) {
        NotificationManager nm =
                (NotificationManager) context.getSystemService(Context.NOTIFICATION_SERVICE);
        if (nm == null) return;

        // 알림 채널 (API 26+)
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            NotificationChannel ch = new NotificationChannel(
                    CHANNEL_ID, "월간 절세 리포트", NotificationManager.IMPORTANCE_DEFAULT);
            ch.setDescription("월 1회 절세 리포트 알림");
            nm.createNotificationChannel(ch);
        }

        // 탭하면 앱 열기
        Intent openIntent = new Intent(context, MainActivity.class);
        openIntent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP);
        int piFlags = PendingIntent.FLAG_UPDATE_CURRENT;
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
            piFlags |= PendingIntent.FLAG_IMMUTABLE;
        }
        PendingIntent contentPi = PendingIntent.getActivity(context, 1001, openIntent, piFlags);

        Notification.Builder b;
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            b = new Notification.Builder(context, CHANNEL_ID);
        } else {
            b = new Notification.Builder(context);
        }
        b.setSmallIcon(android.R.drawable.ic_dialog_info)
                .setContentTitle("📊 이번 달 절세 리포트")
                .setContentText("양도세 절세 현황과 '오늘의 양도세 한 컷'이 업데이트됐어요. 확인해 보세요!")
                .setAutoCancel(true)
                .setContentIntent(contentPi);

        try {
            nm.notify(NOTI_ID, b.build());
        } catch (SecurityException e) {
            // POST_NOTIFICATIONS 권한 미허용 시 무시
        }
    }
}
