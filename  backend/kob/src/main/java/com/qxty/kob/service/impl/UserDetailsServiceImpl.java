package com.qxty.kob.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.qxty.kob.mapper.UserMapper;
import com.qxty.kob.pojo.User;
import com.qxty.kob.service.impl.utils.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private  UserMapper userMapper;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("username", username);
        User user = userMapper.selectOne(queryWrapper);
        if (user == null) {
            throw new  RuntimeException("user no exist");
        }
        return new UserDetailsImpl(user);
    }
}
