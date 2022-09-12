import { MigrationInterface, QueryRunner } from "typeorm";

export class bookEPubBase21663012111209 implements MigrationInterface {
    name = 'bookEPubBase21663012111209'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_8c5bb8649ae04edcfaf93d57574"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "REL_8c5bb8649ae04edcfaf93d5757"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "favoritesId"`);
        await queryRunner.query(`ALTER TABLE "favorites" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "favorites" ADD CONSTRAINT "FK_e747534006c6e3c2f09939da60f" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "favorites" DROP CONSTRAINT "FK_e747534006c6e3c2f09939da60f"`);
        await queryRunner.query(`ALTER TABLE "favorites" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "favoritesId" uuid`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "REL_8c5bb8649ae04edcfaf93d5757" UNIQUE ("favoritesId")`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_8c5bb8649ae04edcfaf93d57574" FOREIGN KEY ("favoritesId") REFERENCES "favorites"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
