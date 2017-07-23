package com.stylefeng.guns.modular.system.service.impl;

import com.stylefeng.guns.common.persistence.dao.SalaryMapper;
import com.stylefeng.guns.modular.system.service.ISalaryService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;

/**
 * Created by cc on 2017/7/22.
 */
@Service
public class SalaryServiceImpl implements ISalaryService {
    @Resource
    SalaryMapper salaryMapper;
    @Override
    @Transactional(readOnly = false)
    public void delSalaryById(Integer id) {
        this.salaryMapper.deleteById(id);
    }
}
