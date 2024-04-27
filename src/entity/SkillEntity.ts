import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { UserEntity } from "./UserEntity";

@Entity({ name: "skills" })
export class SkillEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => UserEntity, user => user.skills, { nullable: false })
    @JoinColumn({ name: "user_id" })
    user: UserEntity;

    @Column({ name: "skill_name", length: 255, nullable: false })
    skillName: string;

    @Column({ type: "enum", enum: ["beginner", "intermediate", "advanced", "expert"], nullable: false })
    proficiencyLevel: string;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

}


// id: number
// Описание: Первичный ключ для идентификации каждой записи о навыке пользователя.
// Назначение: Уникальный идентификатор записи о навыке пользователя.
// user: UserEntity
// Описание: Связь с объектом UserEntity, которому принадлежит данный навык.
// Назначение: Определяет связь между записью о навыке и соответствующим пользователем.
// skillName: string
// Описание: Название навыка.
// Назначение: Содержит название навыка, который пользователь обладает.
// proficiencyLevel: string
// Описание: Уровень владения навыком (enum: "beginner", "intermediate", "advanced", "expert").
// Назначение: Определяет уровень владения указанным навыком пользователем.
// createdAt: Date
// Описание: Дата и время создания записи о навыке.
// Назначение: Фиксирует момент создания записи о навыке пользователя.
// updatedAt: Date
// Описание: Дата и время последнего обновления записи о навыке.
// Назначение: Отражает момент последнего изменения информации о навыке пользователя.

