package com.backend.toystore.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import com.backend.toystore.model.User;
import com.backend.toystore.repository.UserRepo;

@Service
public class UserService {
    @Autowired
    UserRepo userRepo;

    public User create(User user) {
        return userRepo.save(user);
    }

    public List<User> getAll() {
        return userRepo.findAll();
    }

    public User getId(int uid) {
        return userRepo.findById(uid).orElse(null);
    }

    public boolean update(int uid, User user) {
        if (this.getId(uid) == null) {
            return false;
        }
        try {
            userRepo.save(user);
        } catch (Exception ex) {
            return false;
        }
        return true;
    }

    public boolean delete(int uid) {
        if (this.getId(uid) == null) {
            return false;
        }
        userRepo.deleteById(uid);
        return true;
    }
}
