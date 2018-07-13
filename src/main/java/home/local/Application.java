package home.local;

import home.local.entity.Article;
import home.local.repository.ArticleRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;


@SpringBootApplication
public class Application {
    private static final Logger log = LoggerFactory.getLogger(Application.class);

    public static void main(String[] args) {
        SpringApplication.run(Application.class);

    }

    /**
     * Наполнение для БД
     */
    @Bean
    public CommandLineRunner demo(ArticleRepository repository) {
        return (args) -> {
            repository.save(new Article("Очень давно Политичесие баталии", "Президент становится императором", 115, 04, 1));
            repository.save(new Article("Давно Проигравшие", "Про футбол", 116, 04, 1));
            repository.save(new Article("Сегодня Игрушки", "Сегодня открылся магазин....", 117, 07, 12));
            repository.save(new Article("Давно2", "Про футбол", 112, 04, 1));
            repository.save(new Article("Очень давно2 Игрушки", "Сегодня открылся магазин....", 111, 07, 12));
        };
    }

}
