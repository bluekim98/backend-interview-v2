import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

export enum UserActivityTarget {
    GOODS = 'GOODS',
    POST = 'POST',
}

export enum UserActivityType {
    LIKE = 'LIKE',
}

@Index(['target', 'type', 'userId'])
@Entity({ name: 'user_activity' })
export class UserActivity {
    @PrimaryGeneratedColumn('increment', { type: 'bigint', name: 'id' })
    id?: number;

    @Column({ type: 'varchar', name: 'target' })
    target: UserActivityTarget;

    @Column({ type: 'varchar', name: 'target_id' })
    targetId: string;

    @Column({ type: 'varchar', name: 'type' })
    type: UserActivityType;

    @Column({ type: 'int', name: 'user_id' })
    userId: number;

    @ManyToOne(() => User, (user) => user.userActivities)
    @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
    user?: User;
}