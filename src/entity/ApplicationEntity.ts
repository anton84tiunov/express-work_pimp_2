import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { JobEntity } from "./JobEntity";
import { UserEntity } from "./UserEntity";

@Entity({ name: "applications" })
export class ApplicationEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => JobEntity, job => job.applications, { nullable: false })
    @JoinColumn({ name: "job_id" })
    job: JobEntity;

    @ManyToOne(() => UserEntity, user => user.applications, { nullable: false })
    @JoinColumn({ name: "applicant_id" })
    applicant: UserEntity;

    @Column({ type: "enum", enum: ["pending", "accepted", "rejected"], default: "pending", nullable: false })
    status: string;

    @Column({ type: "text", nullable: true })
    message: string;

    @Column({ name: "resume_url", length: 255, nullable: true })
    resumeUrl: string;

    @Column({ name: "cover_letter", type: "text", nullable: true })
    coverLetter: string;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

}

// id: number
// Описание: Первичный ключ для идентификации каждой заявки.
// Назначение: Уникальный идентификатор записи в таблице заявок.
// job: JobEntity
// Описание: Связь с сущностью вакансии (JobEntity).
// Назначение: Указывает на вакансию, к которой относится данная заявка.
// applicant: UserEntity
// Описание: Связь с сущностью пользователя (UserEntity), представляющей соискателя.
// Назначение: Указывает на пользователя (соискателя), который отправил заявку на вакансию.
// status: string
// Описание: Поле для указания статуса заявки.
// Назначение: Определяет текущий статус заявки (в ожидании, принята, отклонена и т. д.).
// message: string
// Описание: Текстовое поле для дополнительного сообщения или комментария к заявке.
// Назначение: Позволяет соискателю оставить дополнительное сообщение при подаче заявки.
// resumeUrl: string
// Описание: URL ссылка на резюме соискателя.
// Назначение: Ссылка на файл с резюме, связанного с данной заявкой (если доступна).
// coverLetter: string
// Описание: Текстовое поле для сопроводительного письма.
// Назначение: Позволяет соискателю прикрепить сопроводительное письмо к заявке (если доступно).
// createdAt: Date
// Описание: Дата и время создания записи.
// Назначение: Определяет момент создания заявки.
// updatedAt: Date
// Описание: Дата и время последнего обновления записи.
// Назначение: Отражает момент последнего изменения данных о заявке.



