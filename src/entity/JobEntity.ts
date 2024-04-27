import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { UserEntity } from "./UserEntity";
import { ApplicationEntity } from "./ApplicationEntity";
import { JobSkillEntity } from "./JobSkillEntity";
import { CompanyEntity } from "./CompanyEntity";
import { JobCategoryEntity } from "./JobCategoryEntity";

@Entity({ name: "jobs" })
export class JobEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => UserEntity, user => user.jobs, { nullable: false })
    @JoinColumn({ name: "employer_id" })
    employer: UserEntity;

    @Column({ length: 255, nullable: false })
    title: string;

    @Column({ type: "text", nullable: true })
    description: string;

    @Column({ length: 255, nullable: true })
    location: string;

    @Column({ type: "enum", enum: ["entry", "junior", "mid", "senior"], nullable: false })
    experienceLevel: string;

    @Column({ type: "enum", enum: ["full-time", "part-time", "contract", "internship"], nullable: false })
    employmentType: string;

    @Column({ type: "decimal", precision: 10, scale: 2, nullable: true })
    salary: number;

    @Column({ default: false })
    remote: boolean;

    @Column({ default: true })
    published: boolean;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @OneToMany(() => ApplicationEntity, application => application.job)
    applications: ApplicationEntity[];

    @OneToMany(() => JobSkillEntity, jobSkill => jobSkill.job)
    jobSkills: JobSkillEntity[];

    @ManyToOne(() => CompanyEntity, company => company.jobs, { nullable: false }) // Указываем Many-to-One связь с компанией
    @JoinColumn({ name: "company_id" }) // Указываем имя колонки для внешнего ключа
    company: CompanyEntity; // Поле для хранения связанной компании

    @ManyToOne(() => JobCategoryEntity, category => category.jobs, { nullable: false })
    @JoinColumn({ name: "category_id" }) // Указываем имя колонки для внешнего ключа
    category: JobCategoryEntity; // Свойство, которое указывает на связь с JobCategoryEntity

}

// id: number
// Описание: Первичный ключ для идентификации каждой записи о вакансии.
// Назначение: Уникальный идентификатор вакансии в базе данных.
// employer: UserEntity
// Описание: Связь с пользователем (работодателем), создавшим данную вакансию.
// Назначение: Связь между вакансией и пользователем, который является работодателем для этой вакансии.
// title: string
// Описание: Название вакансии.
// Назначение: Содержит название или заголовок вакансии.
// description: string
// Описание: Описание вакансии (необязательное поле).
// Назначение: Содержит описание подробностей о вакансии, такие как обязанности и требования.
// location: string
// Описание: Местоположение вакансии (город, регион и т. д.).
// Назначение: Указывает местоположение, где находится данная вакансия.
// experienceLevel: string
// Описание: Уровень опыта, требуемый для вакансии (enum: "entry", "junior", "mid", "senior").
// Назначение: Определяет минимальный уровень опыта, необходимый для кандидатов на данную вакансию.
// employmentType: string
// Описание: Тип занятости для вакансии (enum: "full-time", "part-time", "contract", "internship").
// Назначение: Определяет режим работы для данной вакансии.
// salary: number
// Описание: Заработная плата для вакансии (число с плавающей запятой).
// Назначение: Указывает ожидаемую или предлагаемую заработную плату для данной вакансии.
// remote: boolean
// Описание: Флаг, указывающий, является ли вакансия удаленной (true/false).
// Назначение: Указывает, предоставляется ли возможность удаленной работы для этой вакансии.
// published: boolean
// Описание: Флаг публикации вакансии (true/false).
// Назначение: Определяет, опубликована ли вакансия на платформе или находится в черновиках.
// createdAt: Date
// Описание: Дата и время создания записи о вакансии.
// Назначение: Фиксирует момент создания записи о вакансии.
// updatedAt: Date
// Описание: Дата и время последнего обновления записи о вакансии.
// Назначение: Отражает момент последнего изменения информации о вакансии.
// applications: ApplicationEntity[]
// Описание: Связь один-ко-многим с заявками на эту вакансию.
// Назначение: Позволяет получить список заявок, связанных с данной вакансией.
// jobSkills: JobSkillEntity[]
// Описание: Связь один-ко-многим с навыками, требуемыми для данной вакансии.
// Назначение: Позволяет определить список навыков, необходимых для успешной кандидатуры на данную вакансию.


