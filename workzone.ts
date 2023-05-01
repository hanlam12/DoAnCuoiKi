


export class Job{
  static job_name: any
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

export class Company{
  constructor(
    public _id:any=null,

    public company_id:string="",

    public company_name:string="",
    public email:string="",
    public phone:string="",
    public password:string="",
    public person_name:string="",
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
export class JobApplication {
  constructor (
    public title: string="",
    public YOB:string="",
    public career:string="",
    public experience:string="",
    public qualification:string="",
    public english_level:string="",
    public work_location:string="",
    public working_form:string="",
    public desired_salary:string="",
    public CV_chinh:string="",
    public your_wishes:string="",
    public introduce_yourself:string="",
    ){}
}

export interface cv{
  cv_detail: string
}


export class Users{
  constructor(
    public _id:any=null,
    public userID:string="",
    public fullname:string="",
    public email:string="",
    public phone:string="",
    public password:string="",
    public gender:string="",
    public DOB: string="",
    public address:string="",
    public district:string="",

    public cv: Array<JobApplication>=[],
    public city:string="",
    public image:string="",
    public savejob: Array<jobJD>=[]

  ){}
}
export interface jobJD{
  savejobJD: string
}

