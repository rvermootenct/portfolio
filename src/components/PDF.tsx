/* eslint-disable jsx-a11y/alt-text */

'use client'

import { MISC } from '@/types/constants'
import { getImagePath } from '@/utils/images'
// import Header from '@/pdf/Header'
import {
  Document, Page, View, Text, usePDF, Image,
} from '@react-pdf/renderer'
import { createTw } from 'react-pdf-tailwind'
import data from '@/data/about'
import skillsData from '@/data/skills'
import workHistory from '@/data/work'
import projects from '@/data/projects'
import { Data } from '@/types/global'

const tw = createTw({
  theme: {
    fontFamily: {
      sans: ['Inter'],
    },
    extend: {
      colors: {
        custom: '#bada55',
      },
    },
  },
})

function SkillComponent({ skill }: {
  skill: string
}) {
  return (
    <View style={tw('flex items-center space-x-2 bg-zinc-100 px-3 py-2')}>
      <View style={tw('relative w-[25px] h-[25px]')}>
        <Image src={getImagePath(skill)} style={tw('w-full h-full object-cover fill')} />
      </View>
      <Text style={tw('text-sm md:text-base capitalize text-zinc-700 font-bold')}>{skill}</Text>
    </View>
  )
}

function Header() {
  return (
    <View style={tw('flex flex-wrap flex-row items-center gap-y-9 gap-x-8 pb-7')}>
      <View style={tw('w-[200px] h-[200px] relative rounded-xl overflow-hidden')}>
        <Image
          src={getImagePath(MISC.PROFILE)}
          style={tw('w-full h-full object-cover')}
        />
      </View>
      <View style={tw('flex-1')}>
        <Text style={tw('text-5xl font-black capitalize text-black')}>
          Ryan Vermooten
        </Text>
        <Text style={tw('mt-2 text-xl font-semibold capitalize text-zinc-400')}>
          Senior full stack developer
        </Text>
        <View style={tw('flex flex-col gap-y-1 gap-x-4 mt-2')}>
          <View style={tw('flex space-x-2')}>
            <Text style={tw('capitalize text-sm md:text-base font-semibold text-zinc-900')}>
              Cape Town, South Africa
            </Text>
          </View>
          <View style={tw('flex space-x-2')}>
            <Text style={tw('capitalize text-sm md:text-base font-semibold text-zinc-900')}>
              7+ years experience
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

function Heading({ text }: { text: string }) {
  return (
    <Text style={tw('uppercase text-2xl text-zinc-400 font-bold')}>
      {text}
    </Text>
  )
}

function Tablet({ info }: { info: Data}) {
  return (
    <View style={tw('border border-zinc-100 rounded-lg p-5 mb-6 mt-2')} wrap={false}>
      <View style={tw('flex flex-wrap gap-5 w-full lg:w-8/12 mb-10')}>
        <View style={tw('flex flex-row gap-2')}>
          <View style={tw('relative w-full md:w-[120px] pt-[56.25%] md:pt-0 md:h-20 rounded-lg overflow-hidden')}>
            <View style={tw('w-full h-full absolute top-0 left-0 bottom-0 right-0')}>
              <Image
                src={getImagePath(info.image)}
              />
            </View>
          </View>
          <View style={tw('flex-col')}>
            <Text style={tw('text-black capitalize font-bold text-base')}>
              {info.title}
            </Text>
            <Text style={tw('text-sm font-bold text-zinc-500')}>{info.subtitle}</Text>
            {info.description
                && (
                <View style={tw('flex items-center gap-x-1 mt-2')}>
                  <Text style={tw('text-black capitalize text-sm font-bold mt-[]2px')}>
                    {info.description}
                  </Text>
                </View>
                )}
          </View>
        </View>
      </View>
      <View style={tw('flex flex-row gap-2 flex-wrap my-4')}>
        {
              info.skills.map(
                (skill) => (
                  <SkillComponent skill={skill} key={skill} />
                ),
              )
            }
      </View>
      <View style={tw('mt-6')}>
        {info.blurb.map((text) => (
          <Text key={text} style={tw('text-zinc-700 text-base font-semibold')}>{text}</Text>
        ))}
      </View>
    </View>
  )
}

function Skills() {
  return (
    <View style={tw('border-t py-7 border-zinc-100')}>
      <Heading text="Skills" />
      <View style={tw('flex flex-wrap flex-row items-center gap-5')}>
        {skillsData.map((skill) => (
          <SkillComponent skill={skill} key={skill} />
        ))}
      </View>
    </View>
  )
}

function About() {
  return (
    <View style={tw('border-t py-7 border-zinc-100')}>
      <Heading text="About" />
      <Text style={tw('text-base font-semibold text-black')}>
        {data.bio}
      </Text>
    </View>
  )
}

function WorkHistory() {
  return (
    <View style={tw('border-t py-7 border-zinc-100')}>
      <Heading text="Work History" />
      {workHistory.map((work) => (
        <View key={work.title}>
          <Tablet info={work} />
        </View>
      ))}
    </View>
  )
}

function Projects() {
  return (
    <View style={tw('border-t py-7 border-zinc-100')}>
      <Heading text="Projects" />
      {projects.map((project) => (
        <View key={project.title}>
          <Tablet info={project} />
        </View>
      ))}
    </View>
  )
}

const MyDoc = (
  <Document>
    <Page size="A4">
      <View style={tw('max-w-screen-xl w-full mx-auto p-4')}>
        <Header />
        <About />
        <Skills />
        <WorkHistory />
        <Projects />
      </View>
    </Page>
  </Document>
)

function PDFDownload() {
  const [instance] = usePDF({ document: MyDoc })

  if (instance.loading) return <View>Loadingss ...</View>

  if (instance.error) {
    return (
      <View>
        Something went wrong:
        {instance.error}
      </View>
    )
  }

  return (
    <a href={instance.url ?? ''} download="test1.pdf">
      Downloads
    </a>
  )
}

export default PDFDownload
