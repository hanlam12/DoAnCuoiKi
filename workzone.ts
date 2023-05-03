export interface IJob{
  _id:any,
  jobJD:string,
  image:string,
  job_name:string,
  company:string,
  category: Array<category>,
  address:string,
  salary:string,
  exprience:string,
  dealine:string,
  welfare:string,
  description:string,
  job_requirement:string,
  contact:string,
  contact_person:string,
  phone_person:number,
  degree:string,
  age:string,
  position:string,
  gender:string,
  recruiting_amount:string,
  work_form:string,
  company_id:string
}


export class Job{
  constructor(
  public _id:any=null,
  public jobJD:string="",
  public image:string="",
  public job_name:string="",
  public company:string="",
  public category: Array<category>,
  public address:string="",
  public salary:string="",
  public exprience:string="",
  public dealine:string="",
  public welfare:string="",
  public description:string="",
  public job_requirement:string="",
  public contact:string="",
  public contact_person:string="",
  public phone_person:number,
  public degree:string="",
  public age:string="",
  public position:string="",
  public gender:string="",
  public recruiting_amount:string="",
  public work_form:string="",
  public company_id:string=""
  ){}
  }

export class User{
  constructor(
    public _id:any=null,
    public userID:string="",
    public fullname:string="",
    public email:string="",
    public gender:string="",
    public DOB: string="",
    public phone:number,
    public address:string="",
    public district:string="",
    public city:string="",
    public password:string="",
    public cv: Array<cv>,
    public image:string=""
    ){}
}

export class Company{
  constructor(
    public _id:any=null,
    public company_id:string="",
    public image:string="",
    public company_name:string="",
    public company_image:string="",
    public company_intro:string="",
    public company_scale:string="",
    public company_address: string ="",
    public company_website:string=""
    ){}
}
export interface category{
   category_detail: string

    }

export interface cv{
  cv_detail: string
}




export class Users{
  constructor(
    public _id:any=null,
    public name:string="",
    public email:string="",
    public phone:string="",
    public username:string="",
    public password:string="",
    public retrypassword:string="",
  ){}
}
