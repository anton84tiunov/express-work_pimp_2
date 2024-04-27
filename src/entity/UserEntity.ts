import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn, ManyToOne } from "typeorm";
import { JobEntity } from "./JobEntity";
import { ApplicationEntity } from "./ApplicationEntity";
import { SkillEntity } from "./SkillEntity";
import { EducationEntity } from "./EducationEntity";
import { CompanyEntity } from "./CompanyEntity";

@Entity({ name: "users" })
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "first_name", length: 255, nullable: false })
    firstName: string;

    @Column({ name: "last_name", length: 255, nullable: false })
    lastName: string;

    @Column({ length: 255, unique: true, nullable: false })
    email: string;

    @Column({ length: 255, nullable: false })
    password: string;

    @Column({ type: "enum", enum: ["employer", "applicant"], nullable: false })
    role: string;

    @ManyToOne(() => CompanyEntity, company => company.users, { nullable: true }) // Указываем Many-to-One связь с компанией
    @JoinColumn({ name: "company_id" }) // Указываем имя колонки для внешнего ключа
    company: string;

    @Column({ name: "phone_number", length: 20, nullable: true })
    phoneNumber: string;

    @Column({ type: "text", nullable: true })
    bio: string;

    @Column({ name: "profile_image", length: 255, nullable: true })
    profileImage: string;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @OneToMany(() => JobEntity, job => job.employer)
    jobs: JobEntity[];

    @OneToMany(() => ApplicationEntity, application => application.applicant)
    applications: ApplicationEntity[];

    @OneToMany(() => SkillEntity, skill => skill.user)
    skills: SkillEntity[];

    @OneToMany(() => EducationEntity, education => education.user)
    educations: EducationEntity[];

}


// id: number
// Описание: Первичный ключ для идентификации каждого пользователя.
// Назначение: Уникальный идентификатор пользователя в базе данных.
// firstName: string
// Описание: Имя пользователя.
// Назначение: Хранит имя пользователя.
// lastName: string
// Описание: Фамилия пользователя.
// Назначение: Хранит фамилию пользователя.
// email: string
// Описание: Электронная почта пользователя (уникальное значение).
// Назначение: Используется для аутентификации и связи с пользователем.
// password: string
// Описание: Хэш пароля пользователя.
// Назначение: Хранит хэшированный пароль для безопасного доступа.
// role: string
// Описание: Роль пользователя (enum: "employer", "applicant").
// Назначение: Определяет роль пользователя на платформе.
// company: string
// Описание: Название компании (если пользователь - работодатель).
// Назначение: Хранит название компании работодателя.
// phoneNumber: string
// Описание: Номер телефона пользователя.
// Назначение: Хранит контактный номер телефона пользователя.
// bio: string
// Описание: Биография пользователя.
// Назначение: Содержит краткую биографическую информацию о пользователе.
// profileImage: string
// Описание: URL изображения профиля пользователя.
// Назначение: Хранит ссылку на изображение профиля пользователя.
// createdAt: Date
// Описание: Дата и время создания записи пользователя.
// Назначение: Фиксирует момент создания учетной записи пользователя.
// updatedAt: Date
// Описание: Дата и время последнего обновления записи пользователя.
// Назначение: Отражает момент последнего изменения данных пользователя.
// jobs: JobEntity[]
// Описание: Список вакансий, созданных пользователем (если роль - работодатель).
// Назначение: Связывает пользователя с созданными им вакансиями.
// applications: ApplicationEntity[]
// Описание: Список заявок пользователя на вакансии.
// Назначение: Связывает пользователя с заявками, которые он подал на вакансии.
// skills: SkillEntity[]
// Описание: Список навыков, принадлежащих пользователю.
// Назначение: Связывает пользователя с его навыками.
// educations: EducationEntity[]
// Описание: Список образования пользователя.
// Назначение: Связывает пользователя с его образовательными данными.






