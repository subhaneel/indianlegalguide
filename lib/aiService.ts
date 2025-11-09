// AI Service for Legal Q&A
// This is a mock implementation. For production, integrate with OpenAI API or similar service.

interface LegalKnowledge {
  keywords: string[]
  response: string
}

const legalKnowledgeBase: LegalKnowledge[] = [
  {
    keywords: ['fundamental rights', 'rights', 'constitutional rights'],
    response: `As an Indian citizen, you have several fundamental rights guaranteed by the Constitution:

1. **Right to Equality (Articles 14-18)**: Equality before law, prohibition of discrimination, equality of opportunity
2. **Right to Freedom (Articles 19-22)**: Freedom of speech, assembly, movement, residence, profession
3. **Right against Exploitation (Articles 23-24)**: Prohibition of trafficking and forced labor
4. **Right to Freedom of Religion (Articles 25-28)**: Freedom of conscience and free profession, practice and propagation of religion
5. **Cultural and Educational Rights (Articles 29-30)**: Protection of interests of minorities
6. **Right to Constitutional Remedies (Article 32)**: Right to move Supreme Court for enforcement of fundamental rights

These rights are protected by the Constitution and can be enforced through courts.`
  },
  {
    keywords: ['police', 'police visit', 'police come', 'police house'],
    response: `When police visit your home, remember these important points:

**Your Rights:**
- Ask for identification (name, badge number, police station)
- Ask the reason for their visit
- Right to see a search warrant if they want to search
- Right to call a lawyer
- Right to have a witness present
- Right to remain silent

**What to Do:**
1. Stay calm and be respectful but firm
2. Do not allow search without a warrant (except in specific cases)
3. Note down everything - officer's name, time, reason
4. Call a lawyer if possible
5. Do not sign any document without reading

**Legal Protection:**
- Article 22 of Constitution protects you from arbitrary arrest
- CrPC Section 50 requires police to inform you of grounds of arrest
- You must be produced before a magistrate within 24 hours if arrested

If you feel your rights are violated, you can file a complaint with senior police officers or approach the court.`
  },
  {
    keywords: ['arrest', 'arrested', 'detention'],
    response: `If you are arrested, you have these important rights:

**Your Rights:**
1. Right to be informed of grounds of arrest (Article 22, CrPC Section 50)
2. Right to consult a lawyer (Article 22)
3. Right to inform family/friend about arrest
4. Must be produced before magistrate within 24 hours (Article 22, CrPC Section 57)
5. Right to bail (except in certain serious offenses)
6. Right to remain silent
7. Cannot be tortured or subjected to cruel treatment

**What to Do:**
- Do not resist arrest physically
- Remain silent until you have a lawyer
- Do not sign any confession or statement under pressure
- Request medical examination if needed
- Remember you are innocent until proven guilty

**Legal Sections:**
- Article 22 of Constitution
- CrPC Section 50, 57
- Section 41A - Notice of appearance

If your rights are violated during arrest, you can file a complaint or approach the court.`
  },
  {
    keywords: ['complaint', 'file complaint', 'how to file'],
    response: `To file a complaint in India:

**For Criminal Complaints (FIR):**
1. Go to the nearest police station
2. Provide information about the offense (CrPC Section 154)
3. Police must register FIR for cognizable offenses
4. Get a copy of the FIR
5. If police refuse, approach the Magistrate (CrPC Section 156)

**For Civil Disputes:**
1. Consult a lawyer
2. Prepare necessary documents
3. File a case in appropriate court (District Court/Civil Court)
4. Pay required court fees

**Online Complaints:**
- Cyber crimes: www.cybercrime.gov.in
- Consumer complaints: consumerhelpline.gov.in
- Women's complaints: ncw.nic.in

**Important:**
- Keep all evidence and documents
- File complaint as soon as possible
- You can file complaint even if police refuse
- Approach court if police don't act on your complaint`
  },
  {
    keywords: ['legal aid', 'free lawyer', 'lawyer help'],
    response: `Free legal aid is available in India under the Legal Services Authorities Act, 1987:

**Who is Eligible:**
- Persons below poverty line
- Women and children
- Members of Scheduled Castes/Tribes
- Victims of human trafficking
- Persons with disabilities
- Industrial workmen
- Victims of natural disasters

**How to Get Legal Aid:**
1. Contact your nearest Legal Services Authority
2. Apply with necessary documents (income certificate, etc.)
3. Your eligibility will be verified
4. A lawyer will be assigned free of cost

**Where to Contact:**
- District Legal Services Authority (DLSA)
- State Legal Services Authority (SLSA)
- National Legal Services Authority (NALSA)
- Legal Aid Clinics in law colleges

**Services Provided:**
- Free legal representation
- Legal advice and consultation
- Mediation and conciliation
- Lok Adalat for settlement

Contact your nearest court or DLSA office for more information.`
  },
  {
    keywords: ['procedure', 'court procedure', 'filing case'],
    response: `Procedure for filing a case in India:

**Criminal Case:**
1. File FIR at police station (for cognizable offenses)
2. Police investigate
3. Chargesheet filed if evidence found
4. Case goes to court
5. Trial proceedings
6. Judgment
7. Appeal if needed

**Civil Case:**
1. Consult a lawyer
2. Prepare plaint/petition with facts
3. File in appropriate court (jurisdiction based on value/place)
4. Pay court fees
5. Court issues summons to opposite party
6. Written statement filed by defendant
7. Evidence and arguments
8. Judgment
9. Appeal if needed

**Important Points:**
- File within limitation period
- Jurisdiction is important (place and value)
- Court fees vary based on case value
- You can represent yourself or hire a lawyer
- Alternative dispute resolution (ADR) is faster and cheaper

For specific procedures, consult a lawyer or visit the court website.`
  },
  {
    keywords: ['jail', 'prison', 'meet', 'visit', 'person in jail', 'meet prisoner', 'jail visit'],
    response: `How to meet someone in jail/prison in India:

**Procedure for Jail Visit:**
1. **Get Permission**: You need to obtain permission from the jail authorities
2. **Valid ID Proof**: Carry a valid government-issued ID (Aadhaar, Voter ID, Driving License)
3. **Relationship Proof**: Carry documents proving your relationship (if required)
4. **Visit Timings**: Jails have specific visiting hours (usually 9 AM to 5 PM)
5. **Application**: Submit an application to the jail superintendent
6. **Approval**: Wait for approval (usually same day or next day)

**Documents Required:**
- Valid ID proof
- Relationship certificate (if visiting family member)
- Application form (available at jail)
- Passport size photos (sometimes required)

**Visiting Rules:**
- Only 2-3 visitors allowed at a time
- Visits are usually limited to 15-30 minutes
- Physical contact may be restricted
- Items like food, clothes may be allowed with permission
- Mobile phones and cameras are strictly prohibited

**Legal Rights:**
- Prisoners have right to meet family members
- Right to legal consultation with lawyer
- Right to meet lawyer in private (CrPC Section 303)
- Family members can visit during specified hours

**If Permission is Denied:**
- Contact the jail superintendent
- Approach the District Magistrate
- File a writ petition in High Court
- Contact a lawyer for assistance

**Important Contacts:**
- Jail Superintendent Office
- District Legal Services Authority (DLSA)
- Prison Welfare Officer

For specific jail rules, contact the concerned jail authorities.`
  },
  {
    keywords: ['bail', 'get bail', 'bail application', 'how to get bail'],
    response: `Understanding Bail in India:

**Types of Bail:**
1. **Regular Bail** (Section 437, 439 CrPC): For person already arrested
2. **Anticipatory Bail** (Section 438 CrPC): Before arrest (if you fear arrest)
3. **Interim Bail**: Temporary bail during trial

**How to Get Bail:**
1. **File Bail Application**: Through a lawyer in appropriate court
2. **Court Hearing**: Court will hear arguments
3. **Conditions**: Court may impose conditions
4. **Bail Bond**: Submit bail bond/security if required
5. **Release**: Once granted, person is released

**Factors Considered:**
- Nature and gravity of offense
- Evidence against accused
- Risk of absconding
- Previous criminal record
- Possibility of tampering with evidence

**Bail Cannot be Granted For:**
- Offenses punishable with death or life imprisonment (with exceptions)
- Repeat offenders in certain cases
- Economic offenses above certain threshold

**Bail Process:**
1. Hire a lawyer
2. File bail application in appropriate court
3. Court hearing (usually within 24-48 hours)
4. If granted, submit bail bond
5. Person is released

**Bail Amount:**
- Varies based on case
- Can be personal bond (no money) or with surety
- Court decides the amount

**Important:**
- Right to bail is a fundamental right (except in specific cases)
- Bail is rule, jail is exception
- Consult a criminal lawyer for bail matters

For bail assistance, contact a criminal lawyer immediately.`
  },
  {
    keywords: ['lawyer', 'contact lawyer', 'find lawyer', 'lawyer number', 'advocate'],
    response: `How to Contact a Lawyer:

**Finding a Lawyer:**
1. **Bar Association**: Contact your local Bar Association
2. **Court Complex**: Visit court complex - lawyers are available there
3. **Legal Aid**: Contact District Legal Services Authority (DLSA) for free legal aid
4. **Online**: Search for lawyers in your area
5. **Referrals**: Ask friends, family, or other lawyers for referrals

**Important Points:**
- Verify lawyer's enrollment number with Bar Council
- Check their specialization and experience
- Discuss fees upfront
- Get everything in writing
- Ask about their success rate in similar cases

**Free Legal Aid Available:**
- National Legal Services Authority (NALSA)
- District Legal Services Authority (DLSA)
- Legal Aid Clinics at law colleges
- For eligible persons (below poverty line, women, SC/ST, etc.)

**When to Contact a Lawyer:**
- Before signing any legal document
- If you're arrested or facing criminal charges
- For property matters
- Family disputes
- Consumer complaints
- Any legal issue requiring expert advice

**Emergency Legal Help:**
- Contact DLSA immediately
- Visit nearest court complex
- Call legal aid helpline
- Contact Bar Association

Remember: Always consult a qualified and enrolled advocate for legal matters.`
  }
]

export async function getAIResponse(question: string): Promise<string> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800))

  const lowerQuestion = question.toLowerCase().trim()

  // Score each knowledge base entry
  const scoredEntries = legalKnowledgeBase.map(knowledge => {
    let score = 0
    knowledge.keywords.forEach(keyword => {
      if (lowerQuestion.includes(keyword)) {
        score += keyword.length // Longer matches score higher
      }
    })
    return { knowledge, score }
  })

  // Sort by score (highest first)
  scoredEntries.sort((a, b) => b.score - a.score)

  // Return the best match if score > 0
  if (scoredEntries[0].score > 0) {
    return scoredEntries[0].knowledge.response
  }

  // Check for partial matches with common legal terms
  const legalTerms = [
    { terms: ['right', 'rights'], response: legalKnowledgeBase[0].response },
    { terms: ['police', 'cop', 'officer'], response: legalKnowledgeBase[1].response },
    { terms: ['arrest', 'detain', 'custody'], response: legalKnowledgeBase[2].response },
    { terms: ['complaint', 'file', 'fir'], response: legalKnowledgeBase[3].response },
    { terms: ['lawyer', 'legal aid', 'advocate', 'contact lawyer'], response: legalKnowledgeBase[4].response },
    { terms: ['court', 'case', 'suit', 'trial'], response: legalKnowledgeBase[5].response },
    { terms: ['jail', 'prison', 'meet', 'visit'], response: legalKnowledgeBase[6].response },
    { terms: ['bail', 'get bail'], response: legalKnowledgeBase[7].response }
  ]

  for (const termGroup of legalTerms) {
    if (termGroup.terms.some(term => lowerQuestion.includes(term))) {
      return termGroup.response
    }
  }

  // Default helpful response
  return `I understand you're asking about "${question}".

I can help you with:
• Fundamental rights (Article 14-32)
• Police visits and your rights
• Arrest procedures and rights
• Filing complaints (FIR, Civil cases)
• Free legal aid
• Court procedures

Try asking:
- "What are my fundamental rights?"
- "What to do if police come to my house?"
- "How to file a complaint?"
- "What are my rights during arrest?"
- "How to get legal aid?"

For specific legal advice, please consult a qualified lawyer. This is general information for educational purposes only.`
}

