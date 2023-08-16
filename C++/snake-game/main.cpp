#include<iostream>
#include<conio.h> // for _kbhit() and _getch() functions
using namespace std;
bool gameover;
const int width = 20;
const int height = 20;
int x, y, fruitX, fruitY, score;
enum Direction {STOP = 0, LEFT, RIGHT, UP, DOWN}; // what is enum?? and how it works
// enum is a user defined data type in C/C++.
// here it is used for direction of snake, by default it is STOP
Direction dir;
void setup(){
    gameover = false;
    dir = STOP;
    x = width/2;
    y = height/2;
    fruitX = rand() % width; // How rand() works??
    fruitY = rand() % height;
    score = 0;
};
void draw(){
    system("cls"); // for windows use system("cls"); for linux use system("clear");
    for(int i = 0; i < width; i++){
        cout << "#";
    }
    cout << endl;
    for(int i = 0; i < height; i++){
        for(int j = 0; j < width; j++){
            if(j == 0 || j == width - 1){
                cout << "#"; // wall
            }
            else if(i == y && j == x){
                cout << "O"; // head of snake in center of screen
            }
            else if(i == fruitY && j == fruitX){
                cout << "F"; // fruit
            }
            else{
                cout << " ";
            }
        }
        cout << endl;
    }
    for(int i = 0; i < width; i++){
        cout << "#";
    }
    cout << endl;
    cout << "Score: " << score << endl;
};
void input(){
    if(_kbhit()){ // async functions return 1 if key is pressed else 0
        switch(_getch()){ // return the key pressed ASCII value
            case 'a':
                dir = LEFT;
                break;
            case 'd':
                dir = RIGHT;
                break;
            case 'w':
                dir = UP;
                break;
            case 's':
                dir = DOWN;
                break;
            case 'x':
                gameover = true; // exit the game
                break;
        }
    }


};
void logic(){
    switch(dir){
        case LEFT:
            x--;
            break;
        case RIGHT:
            x++;
            break;
        case UP:
            y--;
            break;
        case DOWN:
            y++;
            break;
    }
    if(x > width || x < 0 || y > height || y < 0){
        gameover = true;
    }
    if(x == fruitX && y == fruitY){
        score += 10;
        fruitX = rand() % width;
        fruitY = rand() % height;
    }

};
int main(){
    setup();
    while(!gameover){
        draw();
        input();
        logic();
        // sleep(10); // sleep for 10 milliseconds // for windows use Sleep(10);
    }

    return 0;
}