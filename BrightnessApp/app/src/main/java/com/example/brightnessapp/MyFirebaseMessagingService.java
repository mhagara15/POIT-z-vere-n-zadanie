package com.example.brightnessapp;

import android.provider.Settings;
import android.util.Log;
import android.widget.TextView;

import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;

public class MyFirebaseMessagingService extends FirebaseMessagingService {
    private static final String TAG = "FIREBASEEEEEEE";

    @Override
    public void onMessageReceived(RemoteMessage remoteMessage) {
        super.onMessageReceived(remoteMessage);
        if (remoteMessage.getData().size() > 0) {

            Log.i(TAG, "Message data payload: " + remoteMessage.getData().get("brightness"));
            Integer screenBrightness = Integer.parseInt(remoteMessage.getData().get("brightness"));
            if(screenBrightness != null && screenBrightness >= 0 && screenBrightness <= 255){
                android.provider.Settings.System.putInt(getContentResolver(), Settings.System.SCREEN_BRIGHTNESS, screenBrightness);
            } else {
                Log.i(TAG, "ERRORRROROROR");
            }


        }

        if (remoteMessage.getNotification() != null) {
            Log.i(TAG, "Message Notification Body: " + remoteMessage.getNotification().getBody());
        }
    }

    public void onNewToken(String token) {
        Log.i(TAG, "Refreshed token: " + token);
    }


}
