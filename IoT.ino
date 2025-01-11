#include <ESP8266WiFi.h>
#include <WiFiClientSecure.h>
#include <ESP8266HTTPClient.h>

// Replace with your network credentials
const char* ssid = "vivo1234";
const char* password = "12345678";

// Supabase credentials
String API_URL = "https://irepefifgczkvhzmttba.supabase.co";
String API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlyZXBlZmlmZ2N6a3Zoem10dGJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY1NzM5MTMsImV4cCI6MjA1MjE0OTkxM30.fj2B9O32uCCGHRGP_lpXxE3ihEoxbqx7RpdQi_kL_-0";
String TableName = "maintable";
const int httpsPort = 443;


// Sending interval in seconds
int sendinginterval = 1200; // 20 minutes for regular operation
// int sendinginterval = 120; // Uncomment this for 2-minute intervals during testing

HTTPClient https;
WiFiClientSecure client;

// Variables for random sensor data
float temperature;
float humidity;
int moisture;

void setup() {
  Serial.begin(115200);

  // HTTPS client configuration (insecure for testing purposes)
  client.setInsecure();

  // Connect to Wi-Fi
  Serial.print("Connecting to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  // Wi-Fi connected
  Serial.println("\nWiFi connected.");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}

void loop() {
  // If connected to Wi-Fi, send data to Supabase
  if (WiFi.status() == WL_CONNECTED) {
    // Generate random sensor data
    humidity = random(30, 70);   // Random humidity between 30% and 70%
    temperature = random(20, 40); // Random temperature between 20°C and 40°C
    moisture = random(200, 800); // Random moisture value

    // Debug: Log generated values
    Serial.println("Generated Data:");
    Serial.println("Temperature: " + String(temperature));
    Serial.println("Humidity: " + String(humidity));
    Serial.println("Moisture: " + String(moisture));

    // Build and send POST request
    https.begin(client, API_URL + "/rest/v1/" + TableName);
    https.addHeader("Content-Type", "application/json");
    https.addHeader("Prefer", "return=representation");
    https.addHeader("apikey", API_KEY);
    https.addHeader("Authorization", "Bearer " + API_KEY);

    String payload = "{\"temperature\":" + String(temperature) + 
                     ",\"humidity\":" + String(humidity) + 
                     ",\"moisture\":" + String(moisture) + "}";

    int httpCode = https.POST(payload);

    // Log response
    Serial.println("HTTP Code: " + String(httpCode));
    Serial.println("Response: " + https.getString());

    https.end();
  } else {
    Serial.println("Error in Wi-Fi connection");
  }

  // Wait before sending the next request
  delay(100 * sendinginterval);
}
