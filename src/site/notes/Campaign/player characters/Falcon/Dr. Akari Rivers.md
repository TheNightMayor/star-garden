```dataview
TABLE without id
skills.name as Skills, skills.desc as ""
FROM "Campaign/player characters"
Flatten skills
WHERE file = this.file
>>```