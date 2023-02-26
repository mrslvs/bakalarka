#include <Servo.h>
#include <NewPing.h>

#define PIN_TRIGGER 12
#define PIN_ECHO 13
#define MAX_DISTANCE 450
int servo_global = 0;

NewPing sonar(PIN_TRIGGER, PIN_ECHO, MAX_DISTANCE);
Servo servo;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  servo.attach(10);
  servo.write(servo_global);
}

void loop() {
  // put your main code here, to run repeatedly:
  
// SONAR
  int distance = sonar.ping_cm();
  delay(5);
  
  if(distance > 0){
    distance = 0;

    for(int i = 0; i < 5; i++){
      distance += sonar.ping_cm();
      delay(5);
    }

    distance /= 5;
  }

  String output_message = String(distance) + ',' + String(servo_global);

  if(Serial.available() > 0){
    processMessage();
  }
}

void processMessage(){
  String startString = "startpass";
  String str = Serial.readStringUntil('\n');

  if(str.startsWith(startString)){
//    Serial.println(str.substring(startString.length()));
    float tmp = getJoystick(str.substring(startString.length()));
    Serial.println(String(tmp));
  }
}

float getJoystick(String msg){
  float joystick;
  String tmp = msg.substring(2);

  joystick = tmp.toFloat();
  return joystick;
}