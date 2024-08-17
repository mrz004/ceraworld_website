#include <iostream>
#include <vector>
using namespace std;

void square (veector<int> v, int n) {
    for (int i = 0; i < v.size(); i++)
        v[i] = v[i] * v[i];
}

int main() {
    vector<int> v = {1, 2, 3, 4, 5};
    square(v, 5);
    for (int i = 0; i < 5; i++)
        cout << v[i] << " ";
}