import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn } from "typeorm";
import { JobEntity } from "./JobEntity";

@Entity({ name: "job_categories" })
export class JobCategoryEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "name", length: 255, nullable: false })
    name: string;

    @Column({ type: "text", nullable: true })
    description: string;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @OneToMany(() => JobEntity, job => job.category)
    @JoinColumn({ name: "category_id" }) // Имя колонки с внешним ключом к таблице job_categories
    jobs: JobEntity[];

}

// id: number
// Описание: Первичный ключ для идентификации каждой записи категории вакансии.
// Назначение: Уникальный идентификатор записи в таблице категорий вакансий.
// name: string
// Описание: Название категории вакансии.
// Назначение: Содержит название категории, к которой относится определенная группа вакансий.
// description: string
// Описание: Описание категории вакансии (необязательное поле).
// Назначение: Позволяет добавить дополнительное описание или информацию о категории вакансии.
// createdAt: Date
// Описание: Дата и время создания записи о категории вакансии.
// Назначение: Фиксирует момент создания записи в базе данных.
// updatedAt: Date
// Описание: Дата и время последнего обновления записи о категории вакансии.
// Назначение: Отражает момент последнего изменения информации о категории вакансии.

