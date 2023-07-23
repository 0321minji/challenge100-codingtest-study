import sys, os, io, atexit
import copy
from collections import deque

#감소하지 않는 순으로 정렬

#N개의 치킨의 수치를 무작위로 놓은 뒤 
#N/2 명의 CTP 회원이 차례대로 2개의 치킨집을 선택해 정렬

#N/4 명이 차례대로 바로 전 단계의 사람이 정렬한 
# 두개의 그룹을 차례대로 선택하여 치킨집을 정렬

N = int(input()) #치킨 집의 개수

arr = list(map(int, input().split()))

k = int(input()) #정렬중인 회원들의 수


index = N // k

new_arr = []

for i in range(0, N, index):
    new_arr = arr[i:i+index]
    new_arr.sort()
    for j in new_arr:
        print(j, end = ' ')



