import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
    return (
        <section className='flex justify-center' id='projects'>

            <div className='pt-32 pb-32 flex flex-col justify-center items-center gap-5 max-w-6xl'>
                <h2 className='text-6xl font-black mb-10'>Проекты</h2>

                <div className='flex flex-wrap gap-6'>
                    <ProjectCard
                        imageUrl='/pddapp-laptop.png'
                        title='"Кулагер" ПДД Тесты'
                        description='Приложение для решения ПДД тестов, подготовки к реальному тестированию. Таблицы и графики позволят отслеживать ваш прогресс.'
                        badges={['Next.js', 'TypeScript', 'Supabase', 'Tailwind', 'Redux Toolkit', 'shadcn/ui']}
                        liveUrl='https://pdd-app-xi.vercel.app/'
                        codeUrl='https://github.com/xtrphy/pdd-app'
                    />

                    <ProjectCard
                        imageUrl='/extrahands-laptop.png'
                        title='Extra Hands Team'
                        description='Сайт посвященный игровой модификации для популярной визуальной новеллы "Зайчик", разрабатываемая командой Extra Hands.'
                        badges={['Next.js', 'TypeScript', 'Tailwind', 'shadcn/ui']}
                        liveUrl='https://extrahands-website.vercel.app/'
                        codeUrl='https://github.com/xtrphy/extrahands-website'
                    />

                    <ProjectCard
                        imageUrl='/vk-analog-laptop.png'
                        title='VK Analog (ВКоннекте)'
                        description='Аналог социальной сети ВКонтакте. Пользователи могут публиковать посты, ставить лайки, комментировать, подписываться на людей и управлять своим профилем.'
                        badges={['React', 'Express', 'Prisma', 'PostgreSQL', 'Cloudinary', 'GitHub OAuth']}
                        liveUrl='https://vkonnekte-app.netlify.app/'
                        codeUrl='https://github.com/xtrphy/vk-analog'
                    />

                    <ProjectCard
                        imageUrl='/mindmates-laptop.png'
                        title='MindMates Project'
                        description='Приложение для поддержания ментального здоровья. Делайте записи, управляйте своими мыслями и привычками.'
                        badges={['Next.js', 'TypeScript', 'Prisma', 'Tailwind', 'shadcn/ui']}
                        liveUrl='https://mind-mates-app.vercel.app/'
                        codeUrl='https://github.com/xtrphy/mind-mates-app'
                    />
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;