package home.local.entity;

import javax.persistence.*;
import java.util.Date;

@Entity(name = "article")
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Id;

    @Column(name = "title",nullable = false)
    private String title;

    @Column(name = "body")
    private String body;

    @Column(name = "publishedDate")
    @Temporal(TemporalType.TIMESTAMP)
    private Date publishedDate;


    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getPublishedDate() {

        return publishedDate;
    }

    public void setPublishedDate(Date publishedDate) {
        this.publishedDate = publishedDate;
    }

    public Article(String title, String body) {
        this.title = title;
        this.body = body;
        this.publishedDate = new Date();
    }

    public Article(String title, String body, int y, int m, int d) {
        this.title = title;
        this.body = body;
        this.publishedDate = new Date(y,m,d);
    }

    public Article(String title) {
        this(title,"");
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    protected Article() {
    }

    @Override
    public String toString() {
        return "Article{" +
                "Id=" + Id +
                ", title='" + title + '\'' +
                ", body='" + body + '\'' +
                ", publishedDate=" + publishedDate +
                '}';
    }
}
