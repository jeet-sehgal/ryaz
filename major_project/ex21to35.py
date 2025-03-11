# ex-21 
# sum=0
# for i in range(1,11):
#     sum+=i
# print("sum of first 10 natural numbers are : ",sum)

# ex-21 of complex code
# print(sum(range(1,11)))

# ex-22
# no=int(input("enter a number : "))
# if no>1:
#     for i in range(2,no):
#         if no%i==0:
#             print("no")
#             break
#     else:print("yes")
# else:print("no")

# ex-23
# lower=int(input("enter the lower bound : "))
# upper=int(input("enter the upper bound : "))
# lower=lower if lower>1 else 2
# for i in range(lower,upper):
#     for j in range(2,i):
#         if i%j==0:
#             break
#     else:print(i)

# ex-24
# no=int(input("enter a no : "))
# string=str(no)
# sum=0
# for i in string:
#     sum+=int(i)
# print("sum is : ",sum)

# ex-24 of complex code
# no=int(input("enter a no : "))
# n = sum(int(digit) for digit in str(no))
# print(n)

# ex-25
# no=int(input("enter a no : "))
# while no>10:
#     sum=0
#     string=str(no)
#     for i in string:
#         sum+=int(i)
#     no=sum
# print("sum is : ",no)

# ex-25 of complex code
# no=int(input("enter a no : "))
# while no >= 10:  
#         no = sum(int(digit) for digit in str(no))
# print(no)

# ex-26
# no=int(input("enter the no : "))
# a=0
# b=1
# while(a<=no):
#     print(a)
#     c=a+b
#     a=b
#     b=c

# ex-27
# li=[]
# for i in range(1,9):
#     ele=int(input(f"{i} no : "))
#     li.append(ele)
# print("average of no are : ",sum(li)/8)

# ex-27 of complex code
# li=[int(input(f"enter the {i+1} no : ")) for i in range(8)]
# print(sum(li)/8)

# ex-27 of complex code except number of your choice
# li=list(map(int,input("enter 8 no seprated by spaces : ").split()))
# print(f"{sum(li)/len(li):.2f}")

# ex-28
# for i in range(11):
#     print(i**2)

# ex-28 of complex code
# print(*(i**2 for i in range(11)))

# ex-29
#print(sum(i for i in range(0,11,2)))

# ex-30
# a=int(input("enter a = "))
# b=int(input("enter b = "))
# c=int(input("enter c = "))
# for i in range(a,b+1):
#     if i%c==0:
#         print(i)

# ex-30 of complex code
# a,b,c=tuple(int(input(f"enter {i+1} no : ")) for i in range(3))
# for i in range(a,b):
#     if i%c==0:
#         print(i)

# ex-31
# no=int(input("enter the no : "))
# fac=1
# for i in range(1,no+1):
#     fac*=i
# print("factorial : ",fac)

# ex-32  complex code for this you have to import the math module\
# import math
# a=int(input("enter the no : "))
# print( math.prod(range(1,a+1)))

# ex-32
# same as ex-24

# ex-33
# def cal(hours,rate):
#     if hours>40:
#         over=hours-40
#         normalRate=40*rate
#         total=normalRate + (over * (rate*1.5))
#     else:
#         total=hours*rate
#     return total
# hours=int(input("enter your working hours : "))
# rate=int(input("enter the rate per hour : "))
# print(f"the total salary of emp is : {cal(hours,rate)}")

# ex-34
# word=input("enter a word : ")
# pig=word[1:]+word[0]+"ay"
# print("pig latin : ",pig.lower())

# ex-35
# no=float(input("enter your no between 0.0 to 1.0 : "))
# if(no>1):
#     print("error")
# else:
#     if(no>=0.9):
#         print("A")
#     elif(no>=0.8):
#         print("B")
#     elif(no>=0.7):
#         print("C")
#     elif(no>=0.6):
#         print("D")
#     else:
#         print("Fail")

# print([i for i  in range(3)])this is the list comprehensive

# import time 
# print("hello")
# time.sleep(4) 
# print("hello")