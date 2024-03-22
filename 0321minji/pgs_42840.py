def solution(answers):
    answer = []
    
    #각 규칙 배열 선언
    one=[1,2,3,4,5]
    two=[2,1,2,3,2,4,2,5]
    three=[3,3,1,1,2,2,4,4,5,5]
    index1=index2=index3=0
    #cnt dict으로 맞은 개수 관리
    cnt={1:0,2:0,3:0}
    for i in range(len(answers)):
        if answers[i]==one[index1]:
            cnt[1]+=1
        if answers[i]==two[index2]:
            cnt[2]+=1
        if answers[i]==three[index3]:
            cnt[3]+=1
        index1=(index1+1)%len(one)
        index2=(index2+1)%len(two)
        index3=(index3+1)%len(three)
        print(index1,index2,index3)
    temp=max(list(cnt.values()))
    for i in range(1,4):
        if cnt[i]==temp:
            answer.append(i)
    answer.sort()
    return answer
