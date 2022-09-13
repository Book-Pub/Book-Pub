import { MigrationInterface, QueryRunner } from "typeorm";

export class relationsFavEbooks1663027610258 implements MigrationInterface {
    name = 'relationsFavEbooks1663027610258'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ebooks" DROP CONSTRAINT "FK_cddb6ffa753dfcdefc362c4834f"`);
        await queryRunner.query(`ALTER TABLE "ebooks" DROP COLUMN "favoritesId"`);
        await queryRunner.query(`ALTER TABLE "favorites" ADD "ebooksId" uuid`);
        await queryRunner.query(`ALTER TABLE "favorites" ADD CONSTRAINT "FK_666dfe759d511f9e45ce5a8a4c4" FOREIGN KEY ("ebooksId") REFERENCES "ebooks"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "favorites" DROP CONSTRAINT "FK_666dfe759d511f9e45ce5a8a4c4"`);
        await queryRunner.query(`ALTER TABLE "favorites" DROP COLUMN "ebooksId"`);
        await queryRunner.query(`ALTER TABLE "ebooks" ADD "favoritesId" uuid`);
        await queryRunner.query(`ALTER TABLE "ebooks" ADD CONSTRAINT "FK_cddb6ffa753dfcdefc362c4834f" FOREIGN KEY ("favoritesId") REFERENCES "favorites"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
