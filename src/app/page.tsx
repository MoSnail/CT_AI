'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { MessageCircle, ChevronRight, User, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export default function Component() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-gradient-to-b from-gray-900 via-cyan-900 to-gray-900 text-white"
      >
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-opacity-90 bg-gray-900 backdrop-blur-md shadow-lg">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="text-2xl font-bold text-cyan-400">LungAI-胸部CT智能诊断系统</div>
            <nav className="hidden md:flex items-center gap-6">
              {["特色", "注册", "帮助"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    {item}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Button variant="default" className="bg-cyan-600 text-white hover:bg-cyan-700">
                  登录
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button variant="outline" className="text-cyan-400 border-cyan-400 hover:bg-cyan-400 hover:text-white">
                  注册
                </Button>
              </motion.div>
            </nav>
            <Button variant="ghost" className="md:hidden text-cyan-400">
              <User className="h-6 w-6" />
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative h-screen bg-[url('/AI机器人.png?height=800&width=1200')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/70">
            <div className="container mx-auto px-4 h-full flex flex-col justify-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold mb-6 text-cyan-400"
              >
                精确分析CT图像
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl md:text-3xl mb-8 text-gray-300"
              >
                人工智能驱动的医疗影像分析
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Button className="bg-cyan-600 text-white hover:bg-cyan-700 text-lg px-8 py-3 rounded-full">
                  开始体验 <ArrowRight className="ml-2" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Image Grid */}
        <section className="container mx-auto px-4 py-24">
          <h2 className="text-4xl font-bold mb-16 text-center text-cyan-400">常见医学影像类型</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { src: "/肺炎 CT 图像.png", alt: "肺部CT", title: "肺部CT分析" },
              { src: "/炎症.png", alt: "细胞分析", title: "炎症诊断" },
              { src: "/QQ机器人.png", alt: "智能诊断", title: "AI医生智能诊断" },
              { src: "/qt端.png", alt: "数据分析", title: "综合数据分析" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20 bg-gray-800 border-cyan-400 border">
                  <Image src={item.src} alt={item.alt} width={300} height={200} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-cyan-400">{item.title}</h3>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Project Design */}
        <section className="py-24 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center text-cyan-400">项目设计说明</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src="/AI机器人.png?width=500&height=300"
                  alt="AI医疗"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg mx-auto"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-bold text-cyan-400">架构设计</h3>
                <p className="text-gray-300 leading-relaxed">
                  本项目采用最新的深度学习模型与临床医学专业知识相结合，对精准CT影像进行智能分析，以提供准确的诊断依据。
                </p>
                <ul className="space-y-3 text-gray-300">
                  {[
                    "数据预处理：从医疗机构收集的CT图像进行标准化处理，并进行标注和预处理",
                    "模型训练：基于深层神经网络（CNN）等深度学习技术，开发高精度的诊断模型",
                    "模型评估：使用多种指标对模型进行评测，包括准确率、召回率等",
                    "系统集成：将算法嵌入到智能诊断系统中，实现自动化检测和结果展示",
                    "临床验证：由资深医生团队进行验证，实现AI与医生的协同诊断",
                    "用户界面设计：为医生和患者设计友好的操作界面，提供清晰检测结果和辅助信息"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-cyan-400 font-bold mr-2">{index + 1}.</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Components */}
        <section className="container mx-auto px-4 py-24">
          <h2 className="text-4xl font-bold mb-16 text-center text-cyan-400">核心构成</h2>
          <div className="space-y-24">
            {[
              {
                src: "/视频流.png",
                title: "核心构成1",
                description: "项目基于长和算法可视化开发平台研究的CT检测算法，使用3D-CNN模型，实现对肺炎，肺不张，心脏肿大等疾病的异常检测及定位。"
              },
              {
                src: "/硬件.png",
                title: "核心构成2",
                description: "项目采用云边端技术架构，将算法部署至华为国产Atlas200IDK A2开发者套件中通过叶进行检测推理操作降低云端运算压力。"
              },
              {
                src: "/qt端.png",
                title: "核心构成3",
                description: "项目针对医生和患者分别打造了qt端及APP端，以及用于宣传的web网页。多端交互，关生可进行推理操作，患老查找检测报告。"
              },
              {
                src: "/服务器.png",
                title: "核心构成4",
                description: "项目采用河南省鲲鹏服务器保障数据安全，运用高并发管理能力实现微秒级延迟。通过海量并发高弹性管理前端数据。"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: scrollY > index * 300 ? 1 : 0, y: scrollY > index * 300 ? 0 : 50 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col md:flex-row gap-8 items-center bg-gray-800 rounded-lg p-8 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300"
              >
                <Image
                  src={item.src}
                  alt={`Component ${index + 1}`}
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg mx-auto"
                />
                <div className="md:w-1/2">
                  <h3 className="text-3xl font-bold text-cyan-400 mb-4">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* AI Development & Capabilities */}
        <section className="py-24 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: scrollY > 2000 ? 1 : 0, x: scrollY > 2000 ? 0 : -50 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold mb-8 text-cyan-400">AI诊断发展历程</h2>
                <div className="space-y-6 text-gray-300">
                  <p className="leading-relaxed">AI诊断发展经历了多个阶段，从早期的规则引擎到如今的深度学习方法，AI在医学影像分析中的表现越来越出色：</p>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>规则引擎：基于规则和专家经验编写规则，进行初步诊断，灵活性和准确性有限。</li>
                    <li>机器学习：数据量的增加，使用传统的机器学习方法如支持向量机（SVM）和随机森林进行特征提取和分类</li>
                    <li>深度学习：卷积神经网络（CNN）等深度学习技术，实现端到端的诊断</li>
                  </ul>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: scrollY > 2000 ? 1 : 0, x: scrollY > 2000 ? 0 : 50 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold mb-8 text-cyan-400">AI诊断的可靠性</h2>
                <div className="space-y-6 text-gray-300">
                  <p className="leading-relaxed">AI在医学影像分析中的可靠性是一个关键问题，为了确保AI诊断的准确性，我们采取以下措施：</p>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>数据集：使用公开的医学影像分析数据集进行训练和测试，如MedSeg、Camelyon16等。</li>
                    <li>数据增强：通过随机翻转、旋转和缩放等操作，增加训练集的多样性。</li>
                    <li>大量临床数据：使用大量真实病例进行模型训练,确保模型的泛化能力。</li>
                    <li>多轮验证：通过不同的验证集和交叉验证方法评估模型性能，减少过拟合风险。</li>
                    <li>持续优化：结合医生的反馈和意见，不断优化和调整算法。</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
          <p className="text-center mt-12 text-gray-400  italic">
            注：AI诊断系统能够提供可靠的诊断结果，但应作为医生的辅助工具，而非完全替代。
          </p>
        </section>

        {/* Chat Interface */}
        <section className="container mx-auto px-4 py-24">
          <div className="max-w-2xl mx-auto">
            <Card className="p-6 bg-gray-800 shadow-lg border border-cyan-400">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center">
                  <MessageCircle className="text-white w-6 h-6" />
                </div>
                <div className="font-bold text-lg text-cyan-400">你好，早日康复，请问您有什么症状？</div>
              </div>
              <div className="flex gap-2">
                <Input placeholder="请输入你的问题..." className="flex-1 bg-gray-700 text-white border-cyan-400" />
                <Button className="bg-cyan-600 text-white hover:bg-cyan-700">
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16 border-t border-cyan-400">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  title: "CT 诊断系统",
                  items: ["智能医疗影像分析平台"]
                },
                {
                  title: "关于",
                  items: ["公司介绍", "联系我们"]
                },
                {
                  title: "服务",
                  items: ["影像分析", "智能诊断"]
                },
                {
                  title: "帮助中心",
                  items: ["使用指南", "常见问题"]
                }
              ].map((section, index) => (
                <div key={index}>
                  <h3 className="font-bold text-lg mb-4 text-cyan-400">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
              © 2024 CT AI诊断系统. All rights reserved.
            </div>
          </div>
        </footer>
      </motion.div>
    </AnimatePresence>
  )
}
