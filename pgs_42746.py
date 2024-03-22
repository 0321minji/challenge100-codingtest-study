## 원소 = 1000이하 -> 각 원소를 문자열로 변환&길이를 3배 늘려서 비교
# 문자열로 비교시 아스키 값을 비교

def solution(numbers):
    nums=list(map(str,numbers))
    nums.sort(key=lambda x:x*3,reverse=True)
    answer=str(int(''.join(nums)))
    return answer
