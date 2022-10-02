package com.qxty.kob.service.impl.user.bot;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.qxty.kob.mapper.BotMapper;
import com.qxty.kob.pojo.Bot;
import com.qxty.kob.pojo.User;
import com.qxty.kob.service.bot.GetListService;
import com.qxty.kob.service.impl.utils.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GetListServiceImpl implements GetListService {
    @Autowired
    private BotMapper botMapper;

    @Override
    public List<Bot> getList() {
        UsernamePasswordAuthenticationToken authenticationToken =
                (UsernamePasswordAuthenticationToken) SecurityContextHolder.getContext().getAuthentication();

        UserDetailsImpl loginUser = (UserDetailsImpl) authenticationToken.getPrincipal();

        User user = loginUser.getUser();

        QueryWrapper<Bot> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("user_id", user.getId());

        return botMapper.selectList(queryWrapper);
    }
}
