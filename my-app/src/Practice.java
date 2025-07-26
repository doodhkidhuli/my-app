class Student{
    static int totalstudents = 0 ;
    String name;
    void display(){
        totalstudents++;
        System.out.println("Name:"+ name + " Total Students: " + totalstudents);
    }
}

public static void main(){
    Student s1 =  new Student();
    s1.name = "John";
    s1.display();

    Student s2 =  new Student();
    s2.name = "Alice";
    s2.display();

    Student s3 =  new Student();
    s3.name = "Brian";
    s3.display();
}