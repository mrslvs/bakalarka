#include <Servo.h>
#include <NewPing.h>

#define START_COMM 1111
#define END_COMM 2222
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

//  Serial.println(START_COMM); // initiate comm
//  delay(300);

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

  char receivedByte;
  char message[50];
  int pos = 0;


  if(Serial.available() > 0){
    processMessage();
  }


//  if(Serial.available() > 0){
//    while(Serial.available()>0){
//      receivedByte = Serial.read();
//      
//      if(receivedByte == '\n'){
//        // read the line, now process
//        message[pos] = '\0';
//        String msg = String(message);
////        if(message[0] == '1' && message[1] == '1' && message[2] == '1' && message[3] == '1'){
//        if(isStart(msg)){
//          Serial.println("1111");
////          Serial.println(message);
//        }else{
//          Serial.println("5555");
//        }
//      }else{
//        message[pos] = receivedByte;
//      }
//      pos++;
//    }
//  }







  
//  while(Serial.available() > 0){
//    char receivedByte = Serial.read();
//    if(receivedByte == '\n'){
//      message[pos] = '\0';
//      if(message[0]=='1' && message[1]=='1'){
//        servo_global += 5;
////        Serial.println(output_message);
//        Serial.println("test1");
//      }
//    }else{
//      message[pos] = receivedByte;
//    }
//    pos++;
//  }

  // end comm
//  Serial.println(END_COMM);

}

void processMessage(){
  String startString = "startpass";
  String str = Serial.readStringUntil('\n');

  Serial.println(str.substring(startString.length()));
}

boolean isStart(String message){
  if(message[0] == '1' && message[1] == '1' && message[2] == '1' && message[3] == '1'){
    return true;
  }else{
    return false;
  }
}
