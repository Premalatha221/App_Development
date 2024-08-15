package com.backend.toystore.model;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
@Entity

public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int uid;
    private String name;
    @Column(unique = true)  
    private String email;
    private String password;
    private String roles;


@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
// @JsonBackReference
private List<AddWish> addWish = new ArrayList<>();


    public User() {
    } 

    public User(int uid,String name, String email, String password,String roles) {
        this.uid = uid;
        this.name=name;
        this.email = email;
        this.password = password;
        this.roles=roles;
    }

    public int getUid() {
        return uid;
    }

    public void setUid(int uid) {
        this.uid = uid;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    
    public String getRoles() {
        return roles;
    }

    public void setRoles(String roles) {
        this.roles = roles;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    

    // @OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
    // @JsonManagedReference
    // @JsonIgnore
    // private List<Product> product=new ArrayList<>();

   



    
    
}
