# `dataGitlabProjects` Submodule <a name="`dataGitlabProjects` Submodule" id="@cdktf/provider-gitlab.dataGitlabProjects"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabProjects <a name="DataGitlabProjects" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/projects gitlab_projects}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer"></a>

```typescript
import { dataGitlabProjects } from '@cdktf/provider-gitlab'

new dataGitlabProjects.DataGitlabProjects(scope: Construct, id: string, config?: DataGitlabProjectsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig">DataGitlabProjectsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig">DataGitlabProjectsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetArchived">resetArchived</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetIncludeSubgroups">resetIncludeSubgroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetMaxQueryablePages">resetMaxQueryablePages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetMembership">resetMembership</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetMinAccessLevel">resetMinAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetOrderBy">resetOrderBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetOwned">resetOwned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetPage">resetPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetPerPage">resetPerPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetSearch">resetSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetSimple">resetSimple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetSort">resetSort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetStarred">resetStarred</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetStatistics">resetStatistics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetTopic">resetTopic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetVisibility">resetVisibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetWithCustomAttributes">resetWithCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetWithIssuesEnabled">resetWithIssuesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetWithMergeRequestsEnabled">resetWithMergeRequestsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetWithProgrammingLanguage">resetWithProgrammingLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetWithShared">resetWithShared</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetArchived` <a name="resetArchived" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetArchived"></a>

```typescript
public resetArchived(): void
```

##### `resetGroupId` <a name="resetGroupId" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetGroupId"></a>

```typescript
public resetGroupId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIncludeSubgroups` <a name="resetIncludeSubgroups" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetIncludeSubgroups"></a>

```typescript
public resetIncludeSubgroups(): void
```

##### `resetMaxQueryablePages` <a name="resetMaxQueryablePages" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetMaxQueryablePages"></a>

```typescript
public resetMaxQueryablePages(): void
```

##### `resetMembership` <a name="resetMembership" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetMembership"></a>

```typescript
public resetMembership(): void
```

##### `resetMinAccessLevel` <a name="resetMinAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetMinAccessLevel"></a>

```typescript
public resetMinAccessLevel(): void
```

##### `resetOrderBy` <a name="resetOrderBy" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetOrderBy"></a>

```typescript
public resetOrderBy(): void
```

##### `resetOwned` <a name="resetOwned" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetOwned"></a>

```typescript
public resetOwned(): void
```

##### `resetPage` <a name="resetPage" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetPage"></a>

```typescript
public resetPage(): void
```

##### `resetPerPage` <a name="resetPerPage" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetPerPage"></a>

```typescript
public resetPerPage(): void
```

##### `resetSearch` <a name="resetSearch" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetSearch"></a>

```typescript
public resetSearch(): void
```

##### `resetSimple` <a name="resetSimple" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetSimple"></a>

```typescript
public resetSimple(): void
```

##### `resetSort` <a name="resetSort" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetSort"></a>

```typescript
public resetSort(): void
```

##### `resetStarred` <a name="resetStarred" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetStarred"></a>

```typescript
public resetStarred(): void
```

##### `resetStatistics` <a name="resetStatistics" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetStatistics"></a>

```typescript
public resetStatistics(): void
```

##### `resetTopic` <a name="resetTopic" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetTopic"></a>

```typescript
public resetTopic(): void
```

##### `resetVisibility` <a name="resetVisibility" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetVisibility"></a>

```typescript
public resetVisibility(): void
```

##### `resetWithCustomAttributes` <a name="resetWithCustomAttributes" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetWithCustomAttributes"></a>

```typescript
public resetWithCustomAttributes(): void
```

##### `resetWithIssuesEnabled` <a name="resetWithIssuesEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetWithIssuesEnabled"></a>

```typescript
public resetWithIssuesEnabled(): void
```

##### `resetWithMergeRequestsEnabled` <a name="resetWithMergeRequestsEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetWithMergeRequestsEnabled"></a>

```typescript
public resetWithMergeRequestsEnabled(): void
```

##### `resetWithProgrammingLanguage` <a name="resetWithProgrammingLanguage" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetWithProgrammingLanguage"></a>

```typescript
public resetWithProgrammingLanguage(): void
```

##### `resetWithShared` <a name="resetWithShared" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.resetWithShared"></a>

```typescript
public resetWithShared(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabProjects resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.isConstruct"></a>

```typescript
import { dataGitlabProjects } from '@cdktf/provider-gitlab'

dataGitlabProjects.DataGitlabProjects.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.isTerraformElement"></a>

```typescript
import { dataGitlabProjects } from '@cdktf/provider-gitlab'

dataGitlabProjects.DataGitlabProjects.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.isTerraformDataSource"></a>

```typescript
import { dataGitlabProjects } from '@cdktf/provider-gitlab'

dataGitlabProjects.DataGitlabProjects.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.generateConfigForImport"></a>

```typescript
import { dataGitlabProjects } from '@cdktf/provider-gitlab'

dataGitlabProjects.DataGitlabProjects.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGitlabProjects resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGitlabProjects to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGitlabProjects that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/projects#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabProjects to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.projects">projects</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList">DataGitlabProjectsProjectsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.archivedInput">archivedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.groupIdInput">groupIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.includeSubgroupsInput">includeSubgroupsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.maxQueryablePagesInput">maxQueryablePagesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.membershipInput">membershipInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.minAccessLevelInput">minAccessLevelInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.orderByInput">orderByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.ownedInput">ownedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.pageInput">pageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.perPageInput">perPageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.searchInput">searchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.simpleInput">simpleInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.sortInput">sortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.starredInput">starredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.statisticsInput">statisticsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.topicInput">topicInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.visibilityInput">visibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withCustomAttributesInput">withCustomAttributesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withIssuesEnabledInput">withIssuesEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withMergeRequestsEnabledInput">withMergeRequestsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withProgrammingLanguageInput">withProgrammingLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withSharedInput">withSharedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.archived">archived</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.groupId">groupId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.includeSubgroups">includeSubgroups</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.maxQueryablePages">maxQueryablePages</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.membership">membership</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.minAccessLevel">minAccessLevel</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.orderBy">orderBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.owned">owned</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.page">page</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.perPage">perPage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.search">search</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.simple">simple</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.sort">sort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.starred">starred</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.statistics">statistics</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.topic">topic</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.visibility">visibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withCustomAttributes">withCustomAttributes</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withIssuesEnabled">withIssuesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withMergeRequestsEnabled">withMergeRequestsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withProgrammingLanguage">withProgrammingLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withShared">withShared</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `projects`<sup>Required</sup> <a name="projects" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.projects"></a>

```typescript
public readonly projects: DataGitlabProjectsProjectsList;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList">DataGitlabProjectsProjectsList</a>

---

##### `archivedInput`<sup>Optional</sup> <a name="archivedInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.archivedInput"></a>

```typescript
public readonly archivedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `includeSubgroupsInput`<sup>Optional</sup> <a name="includeSubgroupsInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.includeSubgroupsInput"></a>

```typescript
public readonly includeSubgroupsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxQueryablePagesInput`<sup>Optional</sup> <a name="maxQueryablePagesInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.maxQueryablePagesInput"></a>

```typescript
public readonly maxQueryablePagesInput: number;
```

- *Type:* number

---

##### `membershipInput`<sup>Optional</sup> <a name="membershipInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.membershipInput"></a>

```typescript
public readonly membershipInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `minAccessLevelInput`<sup>Optional</sup> <a name="minAccessLevelInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.minAccessLevelInput"></a>

```typescript
public readonly minAccessLevelInput: number;
```

- *Type:* number

---

##### `orderByInput`<sup>Optional</sup> <a name="orderByInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.orderByInput"></a>

```typescript
public readonly orderByInput: string;
```

- *Type:* string

---

##### `ownedInput`<sup>Optional</sup> <a name="ownedInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.ownedInput"></a>

```typescript
public readonly ownedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pageInput`<sup>Optional</sup> <a name="pageInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.pageInput"></a>

```typescript
public readonly pageInput: number;
```

- *Type:* number

---

##### `perPageInput`<sup>Optional</sup> <a name="perPageInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.perPageInput"></a>

```typescript
public readonly perPageInput: number;
```

- *Type:* number

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.searchInput"></a>

```typescript
public readonly searchInput: string;
```

- *Type:* string

---

##### `simpleInput`<sup>Optional</sup> <a name="simpleInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.simpleInput"></a>

```typescript
public readonly simpleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sortInput`<sup>Optional</sup> <a name="sortInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.sortInput"></a>

```typescript
public readonly sortInput: string;
```

- *Type:* string

---

##### `starredInput`<sup>Optional</sup> <a name="starredInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.starredInput"></a>

```typescript
public readonly starredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `statisticsInput`<sup>Optional</sup> <a name="statisticsInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.statisticsInput"></a>

```typescript
public readonly statisticsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.topicInput"></a>

```typescript
public readonly topicInput: string[];
```

- *Type:* string[]

---

##### `visibilityInput`<sup>Optional</sup> <a name="visibilityInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.visibilityInput"></a>

```typescript
public readonly visibilityInput: string;
```

- *Type:* string

---

##### `withCustomAttributesInput`<sup>Optional</sup> <a name="withCustomAttributesInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withCustomAttributesInput"></a>

```typescript
public readonly withCustomAttributesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `withIssuesEnabledInput`<sup>Optional</sup> <a name="withIssuesEnabledInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withIssuesEnabledInput"></a>

```typescript
public readonly withIssuesEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `withMergeRequestsEnabledInput`<sup>Optional</sup> <a name="withMergeRequestsEnabledInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withMergeRequestsEnabledInput"></a>

```typescript
public readonly withMergeRequestsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `withProgrammingLanguageInput`<sup>Optional</sup> <a name="withProgrammingLanguageInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withProgrammingLanguageInput"></a>

```typescript
public readonly withProgrammingLanguageInput: string;
```

- *Type:* string

---

##### `withSharedInput`<sup>Optional</sup> <a name="withSharedInput" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withSharedInput"></a>

```typescript
public readonly withSharedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `archived`<sup>Required</sup> <a name="archived" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.archived"></a>

```typescript
public readonly archived: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.groupId"></a>

```typescript
public readonly groupId: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `includeSubgroups`<sup>Required</sup> <a name="includeSubgroups" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.includeSubgroups"></a>

```typescript
public readonly includeSubgroups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxQueryablePages`<sup>Required</sup> <a name="maxQueryablePages" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.maxQueryablePages"></a>

```typescript
public readonly maxQueryablePages: number;
```

- *Type:* number

---

##### `membership`<sup>Required</sup> <a name="membership" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.membership"></a>

```typescript
public readonly membership: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `minAccessLevel`<sup>Required</sup> <a name="minAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.minAccessLevel"></a>

```typescript
public readonly minAccessLevel: number;
```

- *Type:* number

---

##### `orderBy`<sup>Required</sup> <a name="orderBy" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.orderBy"></a>

```typescript
public readonly orderBy: string;
```

- *Type:* string

---

##### `owned`<sup>Required</sup> <a name="owned" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.owned"></a>

```typescript
public readonly owned: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `page`<sup>Required</sup> <a name="page" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.page"></a>

```typescript
public readonly page: number;
```

- *Type:* number

---

##### `perPage`<sup>Required</sup> <a name="perPage" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.perPage"></a>

```typescript
public readonly perPage: number;
```

- *Type:* number

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

---

##### `simple`<sup>Required</sup> <a name="simple" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.simple"></a>

```typescript
public readonly simple: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sort`<sup>Required</sup> <a name="sort" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.sort"></a>

```typescript
public readonly sort: string;
```

- *Type:* string

---

##### `starred`<sup>Required</sup> <a name="starred" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.starred"></a>

```typescript
public readonly starred: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `statistics`<sup>Required</sup> <a name="statistics" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.statistics"></a>

```typescript
public readonly statistics: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.topic"></a>

```typescript
public readonly topic: string[];
```

- *Type:* string[]

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

---

##### `withCustomAttributes`<sup>Required</sup> <a name="withCustomAttributes" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withCustomAttributes"></a>

```typescript
public readonly withCustomAttributes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `withIssuesEnabled`<sup>Required</sup> <a name="withIssuesEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withIssuesEnabled"></a>

```typescript
public readonly withIssuesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `withMergeRequestsEnabled`<sup>Required</sup> <a name="withMergeRequestsEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withMergeRequestsEnabled"></a>

```typescript
public readonly withMergeRequestsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `withProgrammingLanguage`<sup>Required</sup> <a name="withProgrammingLanguage" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withProgrammingLanguage"></a>

```typescript
public readonly withProgrammingLanguage: string;
```

- *Type:* string

---

##### `withShared`<sup>Required</sup> <a name="withShared" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.withShared"></a>

```typescript
public readonly withShared: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjects.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabProjectsConfig <a name="DataGitlabProjectsConfig" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.Initializer"></a>

```typescript
import { dataGitlabProjects } from '@cdktf/provider-gitlab'

const dataGitlabProjectsConfig: dataGitlabProjects.DataGitlabProjectsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.archived">archived</a></code> | <code>boolean \| cdktf.IResolvable</code> | Limit by archived status. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.groupId">groupId</a></code> | <code>number</code> | The ID of the group owned by the authenticated user to look projects for within. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/projects#id DataGitlabProjects#id}. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.includeSubgroups">includeSubgroups</a></code> | <code>boolean \| cdktf.IResolvable</code> | Include projects in subgroups of this group. Default is `false`. Needs `group_id`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.maxQueryablePages">maxQueryablePages</a></code> | <code>number</code> | The maximum number of project results pages that may be queried. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.membership">membership</a></code> | <code>boolean \| cdktf.IResolvable</code> | Limit by projects that the current user is a member of. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.minAccessLevel">minAccessLevel</a></code> | <code>number</code> | Limit to projects where current user has at least this access level, refer to the [official documentation](https://docs.gitlab.com/ee/api/members.html) for values. Cannot be used with `group_id`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.orderBy">orderBy</a></code> | <code>string</code> | Return projects ordered ordered by: `id`, `name`, `path`, `created_at`, `updated_at`, `last_activity_at`, `similarity`, `repository_size`, `storage_size`, `packages_size`, `wiki_size`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.owned">owned</a></code> | <code>boolean \| cdktf.IResolvable</code> | Limit by projects owned by the current user. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.page">page</a></code> | <code>number</code> | The first page to begin the query on. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.perPage">perPage</a></code> | <code>number</code> | The number of results to return per page. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.search">search</a></code> | <code>string</code> | Return list of authorized projects matching the search criteria. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.simple">simple</a></code> | <code>boolean \| cdktf.IResolvable</code> | Return only the ID, URL, name, and path of each project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.sort">sort</a></code> | <code>string</code> | Return projects sorted in `asc` or `desc` order. Default is `desc`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.starred">starred</a></code> | <code>boolean \| cdktf.IResolvable</code> | Limit by projects starred by the current user. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.statistics">statistics</a></code> | <code>boolean \| cdktf.IResolvable</code> | Include project statistics. Cannot be used with `group_id`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.topic">topic</a></code> | <code>string[]</code> | Limit by projects that have all of the given topics. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.visibility">visibility</a></code> | <code>string</code> | Limit by visibility `public`, `internal`, or `private`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.withCustomAttributes">withCustomAttributes</a></code> | <code>boolean \| cdktf.IResolvable</code> | Include custom attributes in response _(admins only)_. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.withIssuesEnabled">withIssuesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Limit by projects with issues feature enabled. Default is `false`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.withMergeRequestsEnabled">withMergeRequestsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Limit by projects with merge requests feature enabled. Default is `false`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.withProgrammingLanguage">withProgrammingLanguage</a></code> | <code>string</code> | Limit by projects which use the given programming language. Cannot be used with `group_id`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.withShared">withShared</a></code> | <code>boolean \| cdktf.IResolvable</code> | Include projects shared to this group. Default is `true`. Needs `group_id`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `archived`<sup>Optional</sup> <a name="archived" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.archived"></a>

```typescript
public readonly archived: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Limit by archived status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/projects#archived DataGitlabProjects#archived}

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.groupId"></a>

```typescript
public readonly groupId: number;
```

- *Type:* number

The ID of the group owned by the authenticated user to look projects for within.

Cannot be used with `min_access_level`, `with_programming_language` or `statistics`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/projects#group_id DataGitlabProjects#group_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/projects#id DataGitlabProjects#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeSubgroups`<sup>Optional</sup> <a name="includeSubgroups" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.includeSubgroups"></a>

```typescript
public readonly includeSubgroups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Include projects in subgroups of this group. Default is `false`. Needs `group_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/projects#include_subgroups DataGitlabProjects#include_subgroups}

---

##### `maxQueryablePages`<sup>Optional</sup> <a name="maxQueryablePages" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.maxQueryablePages"></a>

```typescript
public readonly maxQueryablePages: number;
```

- *Type:* number

The maximum number of project results pages that may be queried.

Prevents overloading your Gitlab instance in case of a misconfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/projects#max_queryable_pages DataGitlabProjects#max_queryable_pages}

---

##### `membership`<sup>Optional</sup> <a name="membership" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.membership"></a>

```typescript
public readonly membership: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Limit by projects that the current user is a member of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/projects#membership DataGitlabProjects#membership}

---

##### `minAccessLevel`<sup>Optional</sup> <a name="minAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.minAccessLevel"></a>

```typescript
public readonly minAccessLevel: number;
```

- *Type:* number

Limit to projects where current user has at least this access level, refer to the [official documentation](https://docs.gitlab.com/ee/api/members.html) for values. Cannot be used with `group_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/projects#min_access_level DataGitlabProjects#min_access_level}

---

##### `orderBy`<sup>Optional</sup> <a name="orderBy" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.orderBy"></a>

```typescript
public readonly orderBy: string;
```

- *Type:* string

Return projects ordered ordered by: `id`, `name`, `path`, `created_at`, `updated_at`, `last_activity_at`, `similarity`, `repository_size`, `storage_size`, `packages_size`, `wiki_size`.

Some values or only available in certain circumstances. See [upstream docs](https://docs.gitlab.com/ee/api/projects.html#list-all-projects) for details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/projects#order_by DataGitlabProjects#order_by}

---

##### `owned`<sup>Optional</sup> <a name="owned" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.owned"></a>

```typescript
public readonly owned: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Limit by projects owned by the current user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/projects#owned DataGitlabProjects#owned}

---

##### `page`<sup>Optional</sup> <a name="page" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.page"></a>

```typescript
public readonly page: number;
```

- *Type:* number

The first page to begin the query on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/projects#page DataGitlabProjects#page}

---

##### `perPage`<sup>Optional</sup> <a name="perPage" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.perPage"></a>

```typescript
public readonly perPage: number;
```

- *Type:* number

The number of results to return per page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/projects#per_page DataGitlabProjects#per_page}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

Return list of authorized projects matching the search criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/projects#search DataGitlabProjects#search}

---

##### `simple`<sup>Optional</sup> <a name="simple" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.simple"></a>

```typescript
public readonly simple: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Return only the ID, URL, name, and path of each project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/projects#simple DataGitlabProjects#simple}

---

##### `sort`<sup>Optional</sup> <a name="sort" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.sort"></a>

```typescript
public readonly sort: string;
```

- *Type:* string

Return projects sorted in `asc` or `desc` order. Default is `desc`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/projects#sort DataGitlabProjects#sort}

---

##### `starred`<sup>Optional</sup> <a name="starred" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.starred"></a>

```typescript
public readonly starred: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Limit by projects starred by the current user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/projects#starred DataGitlabProjects#starred}

---

##### `statistics`<sup>Optional</sup> <a name="statistics" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.statistics"></a>

```typescript
public readonly statistics: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Include project statistics. Cannot be used with `group_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/projects#statistics DataGitlabProjects#statistics}

---

##### `topic`<sup>Optional</sup> <a name="topic" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.topic"></a>

```typescript
public readonly topic: string[];
```

- *Type:* string[]

Limit by projects that have all of the given topics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/projects#topic DataGitlabProjects#topic}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

Limit by visibility `public`, `internal`, or `private`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/projects#visibility DataGitlabProjects#visibility}

---

##### `withCustomAttributes`<sup>Optional</sup> <a name="withCustomAttributes" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.withCustomAttributes"></a>

```typescript
public readonly withCustomAttributes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Include custom attributes in response _(admins only)_.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/projects#with_custom_attributes DataGitlabProjects#with_custom_attributes}

---

##### `withIssuesEnabled`<sup>Optional</sup> <a name="withIssuesEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.withIssuesEnabled"></a>

```typescript
public readonly withIssuesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Limit by projects with issues feature enabled. Default is `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/projects#with_issues_enabled DataGitlabProjects#with_issues_enabled}

---

##### `withMergeRequestsEnabled`<sup>Optional</sup> <a name="withMergeRequestsEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.withMergeRequestsEnabled"></a>

```typescript
public readonly withMergeRequestsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Limit by projects with merge requests feature enabled. Default is `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/projects#with_merge_requests_enabled DataGitlabProjects#with_merge_requests_enabled}

---

##### `withProgrammingLanguage`<sup>Optional</sup> <a name="withProgrammingLanguage" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.withProgrammingLanguage"></a>

```typescript
public readonly withProgrammingLanguage: string;
```

- *Type:* string

Limit by projects which use the given programming language. Cannot be used with `group_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/projects#with_programming_language DataGitlabProjects#with_programming_language}

---

##### `withShared`<sup>Optional</sup> <a name="withShared" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsConfig.property.withShared"></a>

```typescript
public readonly withShared: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Include projects shared to this group. Default is `true`. Needs `group_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/projects#with_shared DataGitlabProjects#with_shared}

---

### DataGitlabProjectsProjects <a name="DataGitlabProjectsProjects" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjects.Initializer"></a>

```typescript
import { dataGitlabProjects } from '@cdktf/provider-gitlab'

const dataGitlabProjectsProjects: dataGitlabProjects.DataGitlabProjectsProjects = { ... }
```


### DataGitlabProjectsProjectsContainerExpirationPolicy <a name="DataGitlabProjectsProjectsContainerExpirationPolicy" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicy.Initializer"></a>

```typescript
import { dataGitlabProjects } from '@cdktf/provider-gitlab'

const dataGitlabProjectsProjectsContainerExpirationPolicy: dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicy = { ... }
```


### DataGitlabProjectsProjectsForkedFromProject <a name="DataGitlabProjectsProjectsForkedFromProject" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProject.Initializer"></a>

```typescript
import { dataGitlabProjects } from '@cdktf/provider-gitlab'

const dataGitlabProjectsProjectsForkedFromProject: dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProject = { ... }
```


### DataGitlabProjectsProjectsNamespace <a name="DataGitlabProjectsProjectsNamespace" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespace.Initializer"></a>

```typescript
import { dataGitlabProjects } from '@cdktf/provider-gitlab'

const dataGitlabProjectsProjectsNamespace: dataGitlabProjects.DataGitlabProjectsProjectsNamespace = { ... }
```


### DataGitlabProjectsProjectsOwner <a name="DataGitlabProjectsProjectsOwner" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwner"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwner.Initializer"></a>

```typescript
import { dataGitlabProjects } from '@cdktf/provider-gitlab'

const dataGitlabProjectsProjectsOwner: dataGitlabProjects.DataGitlabProjectsProjectsOwner = { ... }
```


### DataGitlabProjectsProjectsPermissions <a name="DataGitlabProjectsProjectsPermissions" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissions.Initializer"></a>

```typescript
import { dataGitlabProjects } from '@cdktf/provider-gitlab'

const dataGitlabProjectsProjectsPermissions: dataGitlabProjects.DataGitlabProjectsProjectsPermissions = { ... }
```


### DataGitlabProjectsProjectsSharedWithGroups <a name="DataGitlabProjectsProjectsSharedWithGroups" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroups.Initializer"></a>

```typescript
import { dataGitlabProjects } from '@cdktf/provider-gitlab'

const dataGitlabProjectsProjectsSharedWithGroups: dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroups = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabProjectsProjectsContainerExpirationPolicyList <a name="DataGitlabProjectsProjectsContainerExpirationPolicyList" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.Initializer"></a>

```typescript
import { dataGitlabProjects } from '@cdktf/provider-gitlab'

new dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.get"></a>

```typescript
public get(index: number): DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference <a name="DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.Initializer"></a>

```typescript
import { dataGitlabProjects } from '@cdktf/provider-gitlab'

new dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.cadence">cadence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.keepN">keepN</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.nameRegex">nameRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.nameRegexDelete">nameRegexDelete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.nameRegexKeep">nameRegexKeep</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.nextRunAt">nextRunAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.olderThan">olderThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicy">DataGitlabProjectsProjectsContainerExpirationPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cadence`<sup>Required</sup> <a name="cadence" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.cadence"></a>

```typescript
public readonly cadence: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `keepN`<sup>Required</sup> <a name="keepN" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.keepN"></a>

```typescript
public readonly keepN: number;
```

- *Type:* number

---

##### `nameRegex`<sup>Required</sup> <a name="nameRegex" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.nameRegex"></a>

```typescript
public readonly nameRegex: string;
```

- *Type:* string

---

##### `nameRegexDelete`<sup>Required</sup> <a name="nameRegexDelete" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.nameRegexDelete"></a>

```typescript
public readonly nameRegexDelete: string;
```

- *Type:* string

---

##### `nameRegexKeep`<sup>Required</sup> <a name="nameRegexKeep" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.nameRegexKeep"></a>

```typescript
public readonly nameRegexKeep: string;
```

- *Type:* string

---

##### `nextRunAt`<sup>Required</sup> <a name="nextRunAt" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.nextRunAt"></a>

```typescript
public readonly nextRunAt: string;
```

- *Type:* string

---

##### `olderThan`<sup>Required</sup> <a name="olderThan" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.olderThan"></a>

```typescript
public readonly olderThan: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGitlabProjectsProjectsContainerExpirationPolicy;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicy">DataGitlabProjectsProjectsContainerExpirationPolicy</a>

---


### DataGitlabProjectsProjectsForkedFromProjectList <a name="DataGitlabProjectsProjectsForkedFromProjectList" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.Initializer"></a>

```typescript
import { dataGitlabProjects } from '@cdktf/provider-gitlab'

new dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.get"></a>

```typescript
public get(index: number): DataGitlabProjectsProjectsForkedFromProjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGitlabProjectsProjectsForkedFromProjectOutputReference <a name="DataGitlabProjectsProjectsForkedFromProjectOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.Initializer"></a>

```typescript
import { dataGitlabProjects } from '@cdktf/provider-gitlab'

new dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.httpUrlToRepo">httpUrlToRepo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.nameWithNamespace">nameWithNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.pathWithNamespace">pathWithNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.webUrl">webUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProject">DataGitlabProjectsProjectsForkedFromProject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpUrlToRepo`<sup>Required</sup> <a name="httpUrlToRepo" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.httpUrlToRepo"></a>

```typescript
public readonly httpUrlToRepo: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nameWithNamespace`<sup>Required</sup> <a name="nameWithNamespace" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.nameWithNamespace"></a>

```typescript
public readonly nameWithNamespace: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `pathWithNamespace`<sup>Required</sup> <a name="pathWithNamespace" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.pathWithNamespace"></a>

```typescript
public readonly pathWithNamespace: string;
```

- *Type:* string

---

##### `webUrl`<sup>Required</sup> <a name="webUrl" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.webUrl"></a>

```typescript
public readonly webUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGitlabProjectsProjectsForkedFromProject;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProject">DataGitlabProjectsProjectsForkedFromProject</a>

---


### DataGitlabProjectsProjectsList <a name="DataGitlabProjectsProjectsList" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.Initializer"></a>

```typescript
import { dataGitlabProjects } from '@cdktf/provider-gitlab'

new dataGitlabProjects.DataGitlabProjectsProjectsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.get"></a>

```typescript
public get(index: number): DataGitlabProjectsProjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGitlabProjectsProjectsNamespaceList <a name="DataGitlabProjectsProjectsNamespaceList" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.Initializer"></a>

```typescript
import { dataGitlabProjects } from '@cdktf/provider-gitlab'

new dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.get"></a>

```typescript
public get(index: number): DataGitlabProjectsProjectsNamespaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGitlabProjectsProjectsNamespaceOutputReference <a name="DataGitlabProjectsProjectsNamespaceOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.Initializer"></a>

```typescript
import { dataGitlabProjects } from '@cdktf/provider-gitlab'

new dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.fullPath">fullPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespace">DataGitlabProjectsProjectsNamespace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fullPath`<sup>Required</sup> <a name="fullPath" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.fullPath"></a>

```typescript
public readonly fullPath: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGitlabProjectsProjectsNamespace;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespace">DataGitlabProjectsProjectsNamespace</a>

---


### DataGitlabProjectsProjectsOutputReference <a name="DataGitlabProjectsProjectsOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.Initializer"></a>

```typescript
import { dataGitlabProjects } from '@cdktf/provider-gitlab'

new dataGitlabProjects.DataGitlabProjectsProjectsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.allowMergeOnSkippedPipeline">allowMergeOnSkippedPipeline</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.analyticsAccessLevel">analyticsAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.approvalsBeforeMerge">approvalsBeforeMerge</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.archived">archived</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.autoCancelPendingPipelines">autoCancelPendingPipelines</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.autocloseReferencedIssues">autocloseReferencedIssues</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.autoDevopsDeployStrategy">autoDevopsDeployStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.autoDevopsEnabled">autoDevopsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.avatarUrl">avatarUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.buildCoverageRegex">buildCoverageRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.buildGitStrategy">buildGitStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.buildsAccessLevel">buildsAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.buildTimeout">buildTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.ciConfigPath">ciConfigPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.ciDefaultGitDepth">ciDefaultGitDepth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.ciForwardDeploymentEnabled">ciForwardDeploymentEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.ciRestrictPipelineCancellationRole">ciRestrictPipelineCancellationRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.containerExpirationPolicy">containerExpirationPolicy</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList">DataGitlabProjectsProjectsContainerExpirationPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.containerRegistryAccessLevel">containerRegistryAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.containerRegistryEnabled">containerRegistryEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.creatorId">creatorId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.customAttributes">customAttributes</a></code> | <code>cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.defaultBranch">defaultBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.emailsEnabled">emailsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.emptyRepo">emptyRepo</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.environmentsAccessLevel">environmentsAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.externalAuthorizationClassificationLabel">externalAuthorizationClassificationLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.featureFlagsAccessLevel">featureFlagsAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.forkedFromProject">forkedFromProject</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList">DataGitlabProjectsProjectsForkedFromProjectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.forkingAccessLevel">forkingAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.forksCount">forksCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.groupRunnersEnabled">groupRunnersEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.httpUrlToRepo">httpUrlToRepo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.importError">importError</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.importStatus">importStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.importUrl">importUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.infrastructureAccessLevel">infrastructureAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.issuesAccessLevel">issuesAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.issuesEnabled">issuesEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.jobsEnabled">jobsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.keepLatestArtifact">keepLatestArtifact</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.lastActivityAt">lastActivityAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.lfsEnabled">lfsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.links">links</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergeCommitTemplate">mergeCommitTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergeMethod">mergeMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergePipelinesEnabled">mergePipelinesEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergeRequestsAccessLevel">mergeRequestsAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergeRequestsEnabled">mergeRequestsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergeTrainsEnabled">mergeTrainsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mirror">mirror</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mirrorOverwritesDivergedBranches">mirrorOverwritesDivergedBranches</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mirrorTriggerBuilds">mirrorTriggerBuilds</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mirrorUserId">mirrorUserId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.monitorAccessLevel">monitorAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.namespace">namespace</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList">DataGitlabProjectsProjectsNamespaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.nameWithNamespace">nameWithNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.onlyAllowMergeIfAllDiscussionsAreResolved">onlyAllowMergeIfAllDiscussionsAreResolved</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.onlyAllowMergeIfPipelineSucceeds">onlyAllowMergeIfPipelineSucceeds</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.onlyMirrorProtectedBranches">onlyMirrorProtectedBranches</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.openIssuesCount">openIssuesCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.owner">owner</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList">DataGitlabProjectsProjectsOwnerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.packagesEnabled">packagesEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.pathWithNamespace">pathWithNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.permissions">permissions</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList">DataGitlabProjectsProjectsPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.publicBuilds">publicBuilds</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.readmeUrl">readmeUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.releasesAccessLevel">releasesAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.repositoryAccessLevel">repositoryAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.repositoryStorage">repositoryStorage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.requestAccessEnabled">requestAccessEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.requirementsAccessLevel">requirementsAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.resolveOutdatedDiffDiscussions">resolveOutdatedDiffDiscussions</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.restrictUserDefinedVariables">restrictUserDefinedVariables</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.runnersToken">runnersToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.securityAndComplianceAccessLevel">securityAndComplianceAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.sharedRunnersEnabled">sharedRunnersEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.sharedWithGroups">sharedWithGroups</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList">DataGitlabProjectsProjectsSharedWithGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.snippetsAccessLevel">snippetsAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.snippetsEnabled">snippetsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.squashCommitTemplate">squashCommitTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.sshUrlToRepo">sshUrlToRepo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.starCount">starCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.statistics">statistics</a></code> | <code>cdktf.NumberMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.suggestionCommitMessage">suggestionCommitMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.tagList">tagList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.topics">topics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.visibility">visibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.webUrl">webUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.wikiAccessLevel">wikiAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.wikiEnabled">wikiEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjects">DataGitlabProjectsProjects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowMergeOnSkippedPipeline`<sup>Required</sup> <a name="allowMergeOnSkippedPipeline" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.allowMergeOnSkippedPipeline"></a>

```typescript
public readonly allowMergeOnSkippedPipeline: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `analyticsAccessLevel`<sup>Required</sup> <a name="analyticsAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.analyticsAccessLevel"></a>

```typescript
public readonly analyticsAccessLevel: string;
```

- *Type:* string

---

##### `approvalsBeforeMerge`<sup>Required</sup> <a name="approvalsBeforeMerge" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.approvalsBeforeMerge"></a>

```typescript
public readonly approvalsBeforeMerge: number;
```

- *Type:* number

---

##### `archived`<sup>Required</sup> <a name="archived" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.archived"></a>

```typescript
public readonly archived: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `autoCancelPendingPipelines`<sup>Required</sup> <a name="autoCancelPendingPipelines" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.autoCancelPendingPipelines"></a>

```typescript
public readonly autoCancelPendingPipelines: string;
```

- *Type:* string

---

##### `autocloseReferencedIssues`<sup>Required</sup> <a name="autocloseReferencedIssues" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.autocloseReferencedIssues"></a>

```typescript
public readonly autocloseReferencedIssues: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `autoDevopsDeployStrategy`<sup>Required</sup> <a name="autoDevopsDeployStrategy" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.autoDevopsDeployStrategy"></a>

```typescript
public readonly autoDevopsDeployStrategy: string;
```

- *Type:* string

---

##### `autoDevopsEnabled`<sup>Required</sup> <a name="autoDevopsEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.autoDevopsEnabled"></a>

```typescript
public readonly autoDevopsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `avatarUrl`<sup>Required</sup> <a name="avatarUrl" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.avatarUrl"></a>

```typescript
public readonly avatarUrl: string;
```

- *Type:* string

---

##### `buildCoverageRegex`<sup>Required</sup> <a name="buildCoverageRegex" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.buildCoverageRegex"></a>

```typescript
public readonly buildCoverageRegex: string;
```

- *Type:* string

---

##### `buildGitStrategy`<sup>Required</sup> <a name="buildGitStrategy" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.buildGitStrategy"></a>

```typescript
public readonly buildGitStrategy: string;
```

- *Type:* string

---

##### `buildsAccessLevel`<sup>Required</sup> <a name="buildsAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.buildsAccessLevel"></a>

```typescript
public readonly buildsAccessLevel: string;
```

- *Type:* string

---

##### `buildTimeout`<sup>Required</sup> <a name="buildTimeout" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.buildTimeout"></a>

```typescript
public readonly buildTimeout: number;
```

- *Type:* number

---

##### `ciConfigPath`<sup>Required</sup> <a name="ciConfigPath" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.ciConfigPath"></a>

```typescript
public readonly ciConfigPath: string;
```

- *Type:* string

---

##### `ciDefaultGitDepth`<sup>Required</sup> <a name="ciDefaultGitDepth" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.ciDefaultGitDepth"></a>

```typescript
public readonly ciDefaultGitDepth: number;
```

- *Type:* number

---

##### `ciForwardDeploymentEnabled`<sup>Required</sup> <a name="ciForwardDeploymentEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.ciForwardDeploymentEnabled"></a>

```typescript
public readonly ciForwardDeploymentEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `ciRestrictPipelineCancellationRole`<sup>Required</sup> <a name="ciRestrictPipelineCancellationRole" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.ciRestrictPipelineCancellationRole"></a>

```typescript
public readonly ciRestrictPipelineCancellationRole: string;
```

- *Type:* string

---

##### `containerExpirationPolicy`<sup>Required</sup> <a name="containerExpirationPolicy" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.containerExpirationPolicy"></a>

```typescript
public readonly containerExpirationPolicy: DataGitlabProjectsProjectsContainerExpirationPolicyList;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsContainerExpirationPolicyList">DataGitlabProjectsProjectsContainerExpirationPolicyList</a>

---

##### `containerRegistryAccessLevel`<sup>Required</sup> <a name="containerRegistryAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.containerRegistryAccessLevel"></a>

```typescript
public readonly containerRegistryAccessLevel: string;
```

- *Type:* string

---

##### `containerRegistryEnabled`<sup>Required</sup> <a name="containerRegistryEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.containerRegistryEnabled"></a>

```typescript
public readonly containerRegistryEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `creatorId`<sup>Required</sup> <a name="creatorId" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.creatorId"></a>

```typescript
public readonly creatorId: number;
```

- *Type:* number

---

##### `customAttributes`<sup>Required</sup> <a name="customAttributes" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.customAttributes"></a>

```typescript
public readonly customAttributes: StringMapList;
```

- *Type:* cdktf.StringMapList

---

##### `defaultBranch`<sup>Required</sup> <a name="defaultBranch" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.defaultBranch"></a>

```typescript
public readonly defaultBranch: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `emailsEnabled`<sup>Required</sup> <a name="emailsEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.emailsEnabled"></a>

```typescript
public readonly emailsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `emptyRepo`<sup>Required</sup> <a name="emptyRepo" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.emptyRepo"></a>

```typescript
public readonly emptyRepo: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `environmentsAccessLevel`<sup>Required</sup> <a name="environmentsAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.environmentsAccessLevel"></a>

```typescript
public readonly environmentsAccessLevel: string;
```

- *Type:* string

---

##### `externalAuthorizationClassificationLabel`<sup>Required</sup> <a name="externalAuthorizationClassificationLabel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.externalAuthorizationClassificationLabel"></a>

```typescript
public readonly externalAuthorizationClassificationLabel: string;
```

- *Type:* string

---

##### `featureFlagsAccessLevel`<sup>Required</sup> <a name="featureFlagsAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.featureFlagsAccessLevel"></a>

```typescript
public readonly featureFlagsAccessLevel: string;
```

- *Type:* string

---

##### `forkedFromProject`<sup>Required</sup> <a name="forkedFromProject" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.forkedFromProject"></a>

```typescript
public readonly forkedFromProject: DataGitlabProjectsProjectsForkedFromProjectList;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsForkedFromProjectList">DataGitlabProjectsProjectsForkedFromProjectList</a>

---

##### `forkingAccessLevel`<sup>Required</sup> <a name="forkingAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.forkingAccessLevel"></a>

```typescript
public readonly forkingAccessLevel: string;
```

- *Type:* string

---

##### `forksCount`<sup>Required</sup> <a name="forksCount" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.forksCount"></a>

```typescript
public readonly forksCount: number;
```

- *Type:* number

---

##### `groupRunnersEnabled`<sup>Required</sup> <a name="groupRunnersEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.groupRunnersEnabled"></a>

```typescript
public readonly groupRunnersEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `httpUrlToRepo`<sup>Required</sup> <a name="httpUrlToRepo" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.httpUrlToRepo"></a>

```typescript
public readonly httpUrlToRepo: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `importError`<sup>Required</sup> <a name="importError" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.importError"></a>

```typescript
public readonly importError: string;
```

- *Type:* string

---

##### `importStatus`<sup>Required</sup> <a name="importStatus" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.importStatus"></a>

```typescript
public readonly importStatus: string;
```

- *Type:* string

---

##### `importUrl`<sup>Required</sup> <a name="importUrl" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.importUrl"></a>

```typescript
public readonly importUrl: string;
```

- *Type:* string

---

##### `infrastructureAccessLevel`<sup>Required</sup> <a name="infrastructureAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.infrastructureAccessLevel"></a>

```typescript
public readonly infrastructureAccessLevel: string;
```

- *Type:* string

---

##### `issuesAccessLevel`<sup>Required</sup> <a name="issuesAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.issuesAccessLevel"></a>

```typescript
public readonly issuesAccessLevel: string;
```

- *Type:* string

---

##### `issuesEnabled`<sup>Required</sup> <a name="issuesEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.issuesEnabled"></a>

```typescript
public readonly issuesEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `jobsEnabled`<sup>Required</sup> <a name="jobsEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.jobsEnabled"></a>

```typescript
public readonly jobsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `keepLatestArtifact`<sup>Required</sup> <a name="keepLatestArtifact" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.keepLatestArtifact"></a>

```typescript
public readonly keepLatestArtifact: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lastActivityAt`<sup>Required</sup> <a name="lastActivityAt" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.lastActivityAt"></a>

```typescript
public readonly lastActivityAt: string;
```

- *Type:* string

---

##### `lfsEnabled`<sup>Required</sup> <a name="lfsEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.lfsEnabled"></a>

```typescript
public readonly lfsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.links"></a>

```typescript
public readonly links: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `mergeCommitTemplate`<sup>Required</sup> <a name="mergeCommitTemplate" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergeCommitTemplate"></a>

```typescript
public readonly mergeCommitTemplate: string;
```

- *Type:* string

---

##### `mergeMethod`<sup>Required</sup> <a name="mergeMethod" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergeMethod"></a>

```typescript
public readonly mergeMethod: string;
```

- *Type:* string

---

##### `mergePipelinesEnabled`<sup>Required</sup> <a name="mergePipelinesEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergePipelinesEnabled"></a>

```typescript
public readonly mergePipelinesEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `mergeRequestsAccessLevel`<sup>Required</sup> <a name="mergeRequestsAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergeRequestsAccessLevel"></a>

```typescript
public readonly mergeRequestsAccessLevel: string;
```

- *Type:* string

---

##### `mergeRequestsEnabled`<sup>Required</sup> <a name="mergeRequestsEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergeRequestsEnabled"></a>

```typescript
public readonly mergeRequestsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `mergeTrainsEnabled`<sup>Required</sup> <a name="mergeTrainsEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mergeTrainsEnabled"></a>

```typescript
public readonly mergeTrainsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `mirror`<sup>Required</sup> <a name="mirror" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mirror"></a>

```typescript
public readonly mirror: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `mirrorOverwritesDivergedBranches`<sup>Required</sup> <a name="mirrorOverwritesDivergedBranches" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mirrorOverwritesDivergedBranches"></a>

```typescript
public readonly mirrorOverwritesDivergedBranches: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `mirrorTriggerBuilds`<sup>Required</sup> <a name="mirrorTriggerBuilds" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mirrorTriggerBuilds"></a>

```typescript
public readonly mirrorTriggerBuilds: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `mirrorUserId`<sup>Required</sup> <a name="mirrorUserId" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.mirrorUserId"></a>

```typescript
public readonly mirrorUserId: number;
```

- *Type:* number

---

##### `monitorAccessLevel`<sup>Required</sup> <a name="monitorAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.monitorAccessLevel"></a>

```typescript
public readonly monitorAccessLevel: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: DataGitlabProjectsProjectsNamespaceList;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsNamespaceList">DataGitlabProjectsProjectsNamespaceList</a>

---

##### `nameWithNamespace`<sup>Required</sup> <a name="nameWithNamespace" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.nameWithNamespace"></a>

```typescript
public readonly nameWithNamespace: string;
```

- *Type:* string

---

##### `onlyAllowMergeIfAllDiscussionsAreResolved`<sup>Required</sup> <a name="onlyAllowMergeIfAllDiscussionsAreResolved" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.onlyAllowMergeIfAllDiscussionsAreResolved"></a>

```typescript
public readonly onlyAllowMergeIfAllDiscussionsAreResolved: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `onlyAllowMergeIfPipelineSucceeds`<sup>Required</sup> <a name="onlyAllowMergeIfPipelineSucceeds" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.onlyAllowMergeIfPipelineSucceeds"></a>

```typescript
public readonly onlyAllowMergeIfPipelineSucceeds: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `onlyMirrorProtectedBranches`<sup>Required</sup> <a name="onlyMirrorProtectedBranches" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.onlyMirrorProtectedBranches"></a>

```typescript
public readonly onlyMirrorProtectedBranches: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `openIssuesCount`<sup>Required</sup> <a name="openIssuesCount" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.openIssuesCount"></a>

```typescript
public readonly openIssuesCount: number;
```

- *Type:* number

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.owner"></a>

```typescript
public readonly owner: DataGitlabProjectsProjectsOwnerList;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList">DataGitlabProjectsProjectsOwnerList</a>

---

##### `packagesEnabled`<sup>Required</sup> <a name="packagesEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.packagesEnabled"></a>

```typescript
public readonly packagesEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `pathWithNamespace`<sup>Required</sup> <a name="pathWithNamespace" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.pathWithNamespace"></a>

```typescript
public readonly pathWithNamespace: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.permissions"></a>

```typescript
public readonly permissions: DataGitlabProjectsProjectsPermissionsList;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList">DataGitlabProjectsProjectsPermissionsList</a>

---

##### `publicBuilds`<sup>Required</sup> <a name="publicBuilds" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.publicBuilds"></a>

```typescript
public readonly publicBuilds: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `readmeUrl`<sup>Required</sup> <a name="readmeUrl" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.readmeUrl"></a>

```typescript
public readonly readmeUrl: string;
```

- *Type:* string

---

##### `releasesAccessLevel`<sup>Required</sup> <a name="releasesAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.releasesAccessLevel"></a>

```typescript
public readonly releasesAccessLevel: string;
```

- *Type:* string

---

##### `repositoryAccessLevel`<sup>Required</sup> <a name="repositoryAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.repositoryAccessLevel"></a>

```typescript
public readonly repositoryAccessLevel: string;
```

- *Type:* string

---

##### `repositoryStorage`<sup>Required</sup> <a name="repositoryStorage" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.repositoryStorage"></a>

```typescript
public readonly repositoryStorage: string;
```

- *Type:* string

---

##### `requestAccessEnabled`<sup>Required</sup> <a name="requestAccessEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.requestAccessEnabled"></a>

```typescript
public readonly requestAccessEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `requirementsAccessLevel`<sup>Required</sup> <a name="requirementsAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.requirementsAccessLevel"></a>

```typescript
public readonly requirementsAccessLevel: string;
```

- *Type:* string

---

##### `resolveOutdatedDiffDiscussions`<sup>Required</sup> <a name="resolveOutdatedDiffDiscussions" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.resolveOutdatedDiffDiscussions"></a>

```typescript
public readonly resolveOutdatedDiffDiscussions: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `restrictUserDefinedVariables`<sup>Required</sup> <a name="restrictUserDefinedVariables" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.restrictUserDefinedVariables"></a>

```typescript
public readonly restrictUserDefinedVariables: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `runnersToken`<sup>Required</sup> <a name="runnersToken" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.runnersToken"></a>

```typescript
public readonly runnersToken: string;
```

- *Type:* string

---

##### `securityAndComplianceAccessLevel`<sup>Required</sup> <a name="securityAndComplianceAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.securityAndComplianceAccessLevel"></a>

```typescript
public readonly securityAndComplianceAccessLevel: string;
```

- *Type:* string

---

##### `sharedRunnersEnabled`<sup>Required</sup> <a name="sharedRunnersEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.sharedRunnersEnabled"></a>

```typescript
public readonly sharedRunnersEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `sharedWithGroups`<sup>Required</sup> <a name="sharedWithGroups" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.sharedWithGroups"></a>

```typescript
public readonly sharedWithGroups: DataGitlabProjectsProjectsSharedWithGroupsList;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList">DataGitlabProjectsProjectsSharedWithGroupsList</a>

---

##### `snippetsAccessLevel`<sup>Required</sup> <a name="snippetsAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.snippetsAccessLevel"></a>

```typescript
public readonly snippetsAccessLevel: string;
```

- *Type:* string

---

##### `snippetsEnabled`<sup>Required</sup> <a name="snippetsEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.snippetsEnabled"></a>

```typescript
public readonly snippetsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `squashCommitTemplate`<sup>Required</sup> <a name="squashCommitTemplate" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.squashCommitTemplate"></a>

```typescript
public readonly squashCommitTemplate: string;
```

- *Type:* string

---

##### `sshUrlToRepo`<sup>Required</sup> <a name="sshUrlToRepo" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.sshUrlToRepo"></a>

```typescript
public readonly sshUrlToRepo: string;
```

- *Type:* string

---

##### `starCount`<sup>Required</sup> <a name="starCount" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.starCount"></a>

```typescript
public readonly starCount: number;
```

- *Type:* number

---

##### `statistics`<sup>Required</sup> <a name="statistics" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.statistics"></a>

```typescript
public readonly statistics: NumberMap;
```

- *Type:* cdktf.NumberMap

---

##### `suggestionCommitMessage`<sup>Required</sup> <a name="suggestionCommitMessage" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.suggestionCommitMessage"></a>

```typescript
public readonly suggestionCommitMessage: string;
```

- *Type:* string

---

##### `tagList`<sup>Required</sup> <a name="tagList" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.tagList"></a>

```typescript
public readonly tagList: string[];
```

- *Type:* string[]

---

##### `topics`<sup>Required</sup> <a name="topics" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.topics"></a>

```typescript
public readonly topics: string[];
```

- *Type:* string[]

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

---

##### `webUrl`<sup>Required</sup> <a name="webUrl" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.webUrl"></a>

```typescript
public readonly webUrl: string;
```

- *Type:* string

---

##### `wikiAccessLevel`<sup>Required</sup> <a name="wikiAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.wikiAccessLevel"></a>

```typescript
public readonly wikiAccessLevel: string;
```

- *Type:* string

---

##### `wikiEnabled`<sup>Required</sup> <a name="wikiEnabled" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.wikiEnabled"></a>

```typescript
public readonly wikiEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGitlabProjectsProjects;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjects">DataGitlabProjectsProjects</a>

---


### DataGitlabProjectsProjectsOwnerList <a name="DataGitlabProjectsProjectsOwnerList" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.Initializer"></a>

```typescript
import { dataGitlabProjects } from '@cdktf/provider-gitlab'

new dataGitlabProjects.DataGitlabProjectsProjectsOwnerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.get"></a>

```typescript
public get(index: number): DataGitlabProjectsProjectsOwnerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGitlabProjectsProjectsOwnerOutputReference <a name="DataGitlabProjectsProjectsOwnerOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.Initializer"></a>

```typescript
import { dataGitlabProjects } from '@cdktf/provider-gitlab'

new dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.avatarUrl">avatarUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.websiteUrl">websiteUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwner">DataGitlabProjectsProjectsOwner</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `avatarUrl`<sup>Required</sup> <a name="avatarUrl" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.avatarUrl"></a>

```typescript
public readonly avatarUrl: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `websiteUrl`<sup>Required</sup> <a name="websiteUrl" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.websiteUrl"></a>

```typescript
public readonly websiteUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwnerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGitlabProjectsProjectsOwner;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsOwner">DataGitlabProjectsProjectsOwner</a>

---


### DataGitlabProjectsProjectsPermissionsList <a name="DataGitlabProjectsProjectsPermissionsList" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.Initializer"></a>

```typescript
import { dataGitlabProjects } from '@cdktf/provider-gitlab'

new dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.get"></a>

```typescript
public get(index: number): DataGitlabProjectsProjectsPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGitlabProjectsProjectsPermissionsOutputReference <a name="DataGitlabProjectsProjectsPermissionsOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.Initializer"></a>

```typescript
import { dataGitlabProjects } from '@cdktf/provider-gitlab'

new dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.property.groupAccess">groupAccess</a></code> | <code>cdktf.NumberMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.property.projectAccess">projectAccess</a></code> | <code>cdktf.NumberMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissions">DataGitlabProjectsProjectsPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupAccess`<sup>Required</sup> <a name="groupAccess" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.property.groupAccess"></a>

```typescript
public readonly groupAccess: NumberMap;
```

- *Type:* cdktf.NumberMap

---

##### `projectAccess`<sup>Required</sup> <a name="projectAccess" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.property.projectAccess"></a>

```typescript
public readonly projectAccess: NumberMap;
```

- *Type:* cdktf.NumberMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGitlabProjectsProjectsPermissions;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsPermissions">DataGitlabProjectsProjectsPermissions</a>

---


### DataGitlabProjectsProjectsSharedWithGroupsList <a name="DataGitlabProjectsProjectsSharedWithGroupsList" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.Initializer"></a>

```typescript
import { dataGitlabProjects } from '@cdktf/provider-gitlab'

new dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.get"></a>

```typescript
public get(index: number): DataGitlabProjectsProjectsSharedWithGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGitlabProjectsProjectsSharedWithGroupsOutputReference <a name="DataGitlabProjectsProjectsSharedWithGroupsOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.Initializer"></a>

```typescript
import { dataGitlabProjects } from '@cdktf/provider-gitlab'

new dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.groupAccessLevel">groupAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.groupId">groupId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroups">DataGitlabProjectsProjectsSharedWithGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupAccessLevel`<sup>Required</sup> <a name="groupAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.groupAccessLevel"></a>

```typescript
public readonly groupAccessLevel: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.groupId"></a>

```typescript
public readonly groupId: number;
```

- *Type:* number

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGitlabProjectsProjectsSharedWithGroups;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjects.DataGitlabProjectsProjectsSharedWithGroups">DataGitlabProjectsProjectsSharedWithGroups</a>

---



