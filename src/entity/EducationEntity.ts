import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { UserEntity } from "./UserEntity";

@Entity({ name: "education" })
export class EducationEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => UserEntity, user => user.educations, { nullable: false })
    @JoinColumn({ name: "user_id" })
    user: UserEntity;

    @Column({ length: 255, nullable: false })
    institution: string;

    @Column({ length: 255, nullable: false })
    degree: string;

    @Column({ name: "field_of_study", length: 255, nullable: false })
    fieldOfStudy: string;

    @Column({ name: "start_date", type: "date", nullable: false })
    startDate: Date;

    @Column({ name: "end_date", type: "date", nullable: true })
    endDate: Date;

    @Column({ type: "text", nullable: true })
    description: string;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

}

// id: number
// Описание: Первичный ключ для идентификации каждой записи об образовании.
// Назначение: Уникальный идентификатор записи в таблице образования.
// user: UserEntity
// Описание: Связь с сущностью пользователя (UserEntity).
// Назначение: Определяет пользователя, связанного с данной записью об образовании.
// institution: string
// Описание: Название учебного заведения.
// Назначение: Хранит информацию о названии учебного заведения, в котором получено образование.
// degree: string
// Описание: Уровень полученного образования (степень).
// Назначение: Содержит информацию о полученной степени (например, бакалавр, магистр, доктор и т. д.).
// fieldOfStudy: string
// Описание: Область специализации или направление обучения.
// Назначение: Определяет область, в которой было получено образование (например, информационные технологии, экономика, медицина и т. д.).
// startDate: Date
// Описание: Дата начала обучения.
// Назначение: Содержит дату начала обучения в указанном учебном заведении.
// endDate: Date
// Описание: Дата окончания обучения (необязательное поле).
// Назначение: Опционально указывает дату окончания обучения в учебном заведении.
// description: string
// Описание: Дополнительное описание образования.
// Назначение: Позволяет описать дополнительные детали об образовании (например, курсы, академические достижения и т. д.).
// createdAt: Date
// Описание: Дата и время создания записи об образовании.
// Назначение: Фиксирует момент создания записи в базе данных.
// updatedAt: Date
// Описание: Дата и время последнего обновления записи об образовании.
// Назначение: Отражает момент последнего изменения информации об образовании.
