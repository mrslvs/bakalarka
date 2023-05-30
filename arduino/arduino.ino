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
  servo.attach(9);
  servo.write(servo_global);
}

void loop() {
  if(Serial.available() > 0){
    processMessage();
  }
}

//void processMessage(String output_message){
void processMessage(){
  String startString = "startpass";
  String startStringAnalog = "startanalogpass";
  String str = Serial.readStringUntil('\n');
  String output_message = String(getDistance()) + ',' + String(servo_global);

  if(str.startsWith(startString)){
    float tmp = getJoystick(str.substring(startString.length()));

    moveArm(tmp);
    Serial.println(output_message);
  }
  else if(str.startsWith(startStringAnalog)){
    int xValue = analogRead(joyX);
    
    if(xValue > 600){
      moveArm(1);
    }else if(xValue < 400){
      moveArm(-1);
    }

    Serial.println(output_message);
  }
}

float getJoystick(String msg){
  float joystick;
  String tmp = msg.substring(2);

  joystick = tmp.toFloat();
  return joystick;
}

void moveArm(float joystickPos){
//  servo.attach(10);
  if(joystickPos >  0){
    servo_global += 5;
  }else if(joystickPos < 0){
    servo_global -=5;
  }

  servo.write(servo_global);
//  delay(15);
//  servo.detach();
}

int getDistance(){
  int distance = sonar.ping_cm();
  delay(5);
  
  if(distance > 0){
    for(int i = 0; i < 3; i++){
      distance += sonar.ping_cm();
      delay(5);
    }

    distance /= 4;
  }

  return distance;
}