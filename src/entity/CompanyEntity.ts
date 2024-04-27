import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { UserEntity } from "./UserEntity";
import { JobEntity } from "./JobEntity";

@Entity({ name: "companies" })
export class CompanyEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "name", length: 255, nullable: false })
    name: string;

    @Column({ length: 255, nullable: true })
    industry: string;

    @Column({ type: "enum", enum: ["small", "medium", "large"], nullable: true })
    size: string;

    @Column({ length: 255, nullable: true })
    location: string;

    @Column({ length: 255, nullable: true })
    website: string;

    @Column({ type: "text", nullable: true })
    description: string;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @OneToMany(() => UserEntity, user => user.company) // Связь один ко многим с сущностью UserEntity
    users: UserEntity[]; // Свойство для хранения связанных пользователей

    @OneToMany(() => JobEntity, job => job.company) // Связь один ко многим с сущностью JobEntity
    jobs: JobEntity[]; // Свойство для хранения связанных вакансий

}

// id: number
// Описание: Первичный ключ для идентификации каждой компании.
// Назначение: Уникальный идентификатор записи в таблице компаний.
// name: string
// Описание: Название компании.
// Назначение: Хранит название компании.
// industry: string
// Описание: Отрасль компании.
// Назначение: Содержит информацию об отрасли, в которой работает компания (например, IT, финансы, медицина и т. д.).
// size: string
// Описание: Размер компании.
// Назначение: Определяет размер компании (например, "small", "medium", "large").
// location: string
// Описание: Местоположение компании.
// Назначение: Хранит информацию о местоположении компании (адрес, город, страна и т. д.).
// website: string
// Описание: Веб-сайт компании.
// Назначение: Содержит ссылку на веб-сайт компании.
// description: string
// Описание: Описание компании.
// Назначение: Позволяет описать дополнительные детали о компании (ее деятельность, цели, историю и т. д.).
// createdAt: Date
// Описание: Дата и время создания записи о компании.
// Назначение: Фиксирует момент создания записи о компании в базе данных.
// updatedAt: Date
// Описание: Дата и время последнего обновления записи о компании.
// Назначение: Отражает момент последнего изменения информации о компании.

