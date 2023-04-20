#include <Servo.h>
#include <NewPing.h>

#define PIN_TRIGGER 12
#define PIN_ECHO 13
#define MAX_DISTANCE 450
#define joyX A0
int servo_global = 100;

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

    for(int i = 0; i < 2; i++){
      distance += sonar.ping_cm();
      delay(5);
    }

    distance /= 2;
  }

  String output_message = String(distance) + ',' + String(servo_global);

  if(Serial.available() > 0){
    processMessage(output_message);
  }
}

void processMessage(String output_message){
  String startString = "startpass";
  String startStringAnalog = "startanalogpass";
  String str = Serial.readStringUntil('\n');

  if(str.startsWith(startString)){
//    Serial.println(str.substring(startString.length()));
    float tmp = getJoystick(str.substring(startString.length()));
//    Serial.println(String(tmp));

    moveArm(tmp);
    Serial.println(output_message);
  }
  else if(str.startsWith(startStringAnalog)){
    int xValue = analogRead(joyX);
    
    if(xValue > 511){
      moveArm(1);
      Serial.println(output_message);
    }else if(xValue < 511){
      moveArm(-1);
      Serial.println(output_message);
    }
    
  }
}

float getJoystick(String msg){
  float joystick;
  String tmp = msg.substring(2);

  joystick = tmp.toFloat();
  return joystick;
}

void moveArm(float joystickPos){  
  if(joystickPos >  0){
    servo_global += 5;
  }else if(joystickPos < 0){
    servo_global -=5;
  }

  servo.write(servo_global);
}