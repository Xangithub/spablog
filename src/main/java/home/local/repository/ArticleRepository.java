package home.local.repository;

import home.local.entity.Article;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;



@RepositoryRestResource(collectionResourceRel = "posts", path = "posts")
public interface ArticleRepository extends PagingAndSortingRepository<Article, Long> {

}
