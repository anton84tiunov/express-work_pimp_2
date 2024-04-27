import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { JobEntity } from "./JobEntity";

@Entity({ name: "job_skills" })
export class JobSkillEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => JobEntity, job => job.jobSkills, { nullable: false })
    @JoinColumn({ name: "job_id" })
    job: JobEntity;

    @Column({ name: "skill_name", length: 255, nullable: false })
    skillName: string;

    @Column({ type: "enum", enum: ["desired", "required"], nullable: false })
    proficiencyLevel: string;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

}


// id: number
// Описание: Первичный ключ для идентификации каждой записи о навыке для вакансии.
// Назначение: Уникальный идентификатор записи о навыке для конкретной вакансии.
// job: JobEntity
// Описание: Связь с объектом JobEntity, к которому относится данный навык.
// Назначение: Определяет связь между записью о навыке и соответствующей вакансией.
// skillName: string
// Описание: Название навыка, требуемого для вакансии.
// Назначение: Содержит название требуемого навыка для успешной кандидатуры на вакансию.
// proficiencyLevel: string
// Описание: Уровень владения навыком (enum: "desired", "required").
// Назначение: Определяет необходимый уровень владения указанным навыком для кандидатов.
// createdAt: Date
// Описание: Дата и время создания записи о навыке для вакансии.
// Назначение: Фиксирует момент создания записи о требуемом навыке для данной вакансии.
// updatedAt: Date
// Описание: Дата и время последнего обновления записи о навыке для вакансии.
// Назначение: Отражает момент последнего изменения информации о требуемом навыке для данной вакансии.

