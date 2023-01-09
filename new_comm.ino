#include <Servo.h>

Servo servo;

//int start = 1234;

int start_comm = 1111;
int end_comm = 2222;

//int good = 1235;
//int delim = 999;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  servo.attach(10);
//  servo.write(180);
}

void loop() {
  // put your main code here, to run repeatedly:

  Serial.println(start_comm); // initiate comm
  delay(300);

  char message[12];
  int pos = 0;
  while(Serial.available() > 0){
    char receivedByte = Serial.read();
    if(receivedByte == '\n'){
      Serial.println(end_comm);
      message[pos] = '\0';
      Serial.println(message);
    }else{
      message[pos] = receivedByte;
    }
    pos++;
  }

  // end comm
//  Serial.println(1236);
}