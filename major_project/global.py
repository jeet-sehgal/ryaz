a=10
def fun():
    global a
    a=30
    print(a)
fun()
print(a)