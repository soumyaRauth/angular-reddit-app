export class TestClass {
    /**
     * Properties
     */
    age:number;
    afterAge:number;
    multiLineString:string=`
    <p>Life was so easy when we were kids</p>
    `

    constructor(age:number,afterAge:number){
        this.age=age;
        this.afterAge=afterAge;
    }

    /**
     * Method Calculate Age after certain year
     */
    ageAfterYears():number{
        return this.age+this.afterAge;
    }

}
