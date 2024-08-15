package com.backend.toystore.model;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
@Entity
public class AddWish {
    @Id
    private int cid;
    private String categoryType;

@ManyToOne
@JoinColumn(name = "user_id")

private User user;


// @ManyToOne
// @JoinColumn(name = "product_id")

// private Product product;


    public AddWish() {
    }
    public AddWish(int cid, String categoryType) {
        this.cid = cid;
        this.categoryType = categoryType;
    }
    public int getCid() {
        return cid;
    }
    public void setCid(int cid) {
        this.cid = cid;
    }
    public String getCategoryType() {
        return categoryType;
    }
    public void setCategoryType(String categoryType) {
        this.categoryType = categoryType;
    }
    

     
}