def find(num):
    a=0
    b=1
    c=None
    pre=None
    while a<=num:
        c=a+b
        pre=a
        a=b
        b=c
    if pre==num: return True
    else : return False

num=int(input("enter a number : "))
print(find(num))
