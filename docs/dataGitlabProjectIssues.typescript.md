# `data_gitlab_project_issues`

Refer to the Terraform Registory for docs: [`data_gitlab_project_issues`](https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/data-sources/project_issues).

# `dataGitlabProjectIssues` Submodule <a name="`dataGitlabProjectIssues` Submodule" id="@cdktf/provider-gitlab.dataGitlabProjectIssues"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabProjectIssues <a name="DataGitlabProjectIssues" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/data-sources/project_issues gitlab_project_issues}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer"></a>

```typescript
import { dataGitlabProjectIssues } from '@cdktf/provider-gitlab'

new dataGitlabProjectIssues.DataGitlabProjectIssues(scope: Construct, id: string, config: DataGitlabProjectIssuesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig">DataGitlabProjectIssuesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig">DataGitlabProjectIssuesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetAssigneeId">resetAssigneeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetAssigneeUsername">resetAssigneeUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetAuthorId">resetAuthorId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetConfidential">resetConfidential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetCreatedAfter">resetCreatedAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetCreatedBefore">resetCreatedBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetDueDate">resetDueDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetIids">resetIids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetIssueType">resetIssueType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetMilestone">resetMilestone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetMyReactionEmoji">resetMyReactionEmoji</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotAssigneeId">resetNotAssigneeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotAuthorId">resetNotAuthorId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotLabels">resetNotLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotMilestone">resetNotMilestone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotMyReactionEmoji">resetNotMyReactionEmoji</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetOrderBy">resetOrderBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetSearch">resetSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetSort">resetSort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetUpdatedAfter">resetUpdatedAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetUpdatedBefore">resetUpdatedBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetWeight">resetWeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetWithLabelsDetails">resetWithLabelsDetails</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAssigneeId` <a name="resetAssigneeId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetAssigneeId"></a>

```typescript
public resetAssigneeId(): void
```

##### `resetAssigneeUsername` <a name="resetAssigneeUsername" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetAssigneeUsername"></a>

```typescript
public resetAssigneeUsername(): void
```

##### `resetAuthorId` <a name="resetAuthorId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetAuthorId"></a>

```typescript
public resetAuthorId(): void
```

##### `resetConfidential` <a name="resetConfidential" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetConfidential"></a>

```typescript
public resetConfidential(): void
```

##### `resetCreatedAfter` <a name="resetCreatedAfter" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetCreatedAfter"></a>

```typescript
public resetCreatedAfter(): void
```

##### `resetCreatedBefore` <a name="resetCreatedBefore" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetCreatedBefore"></a>

```typescript
public resetCreatedBefore(): void
```

##### `resetDueDate` <a name="resetDueDate" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetDueDate"></a>

```typescript
public resetDueDate(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIids` <a name="resetIids" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetIids"></a>

```typescript
public resetIids(): void
```

##### `resetIssueType` <a name="resetIssueType" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetIssueType"></a>

```typescript
public resetIssueType(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMilestone` <a name="resetMilestone" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetMilestone"></a>

```typescript
public resetMilestone(): void
```

##### `resetMyReactionEmoji` <a name="resetMyReactionEmoji" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetMyReactionEmoji"></a>

```typescript
public resetMyReactionEmoji(): void
```

##### `resetNotAssigneeId` <a name="resetNotAssigneeId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotAssigneeId"></a>

```typescript
public resetNotAssigneeId(): void
```

##### `resetNotAuthorId` <a name="resetNotAuthorId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotAuthorId"></a>

```typescript
public resetNotAuthorId(): void
```

##### `resetNotLabels` <a name="resetNotLabels" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotLabels"></a>

```typescript
public resetNotLabels(): void
```

##### `resetNotMilestone` <a name="resetNotMilestone" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotMilestone"></a>

```typescript
public resetNotMilestone(): void
```

##### `resetNotMyReactionEmoji` <a name="resetNotMyReactionEmoji" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotMyReactionEmoji"></a>

```typescript
public resetNotMyReactionEmoji(): void
```

##### `resetOrderBy` <a name="resetOrderBy" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetOrderBy"></a>

```typescript
public resetOrderBy(): void
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetScope"></a>

```typescript
public resetScope(): void
```

##### `resetSearch` <a name="resetSearch" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetSearch"></a>

```typescript
public resetSearch(): void
```

##### `resetSort` <a name="resetSort" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetSort"></a>

```typescript
public resetSort(): void
```

##### `resetUpdatedAfter` <a name="resetUpdatedAfter" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetUpdatedAfter"></a>

```typescript
public resetUpdatedAfter(): void
```

##### `resetUpdatedBefore` <a name="resetUpdatedBefore" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetUpdatedBefore"></a>

```typescript
public resetUpdatedBefore(): void
```

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetWeight"></a>

```typescript
public resetWeight(): void
```

##### `resetWithLabelsDetails` <a name="resetWithLabelsDetails" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetWithLabelsDetails"></a>

```typescript
public resetWithLabelsDetails(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.isConstruct"></a>

```typescript
import { dataGitlabProjectIssues } from '@cdktf/provider-gitlab'

dataGitlabProjectIssues.DataGitlabProjectIssues.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.isTerraformElement"></a>

```typescript
import { dataGitlabProjectIssues } from '@cdktf/provider-gitlab'

dataGitlabProjectIssues.DataGitlabProjectIssues.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.isTerraformDataSource"></a>

```typescript
import { dataGitlabProjectIssues } from '@cdktf/provider-gitlab'

dataGitlabProjectIssues.DataGitlabProjectIssues.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.issues">issues</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList">DataGitlabProjectIssuesIssuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.assigneeIdInput">assigneeIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.assigneeUsernameInput">assigneeUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.authorIdInput">authorIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.confidentialInput">confidentialInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.createdAfterInput">createdAfterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.createdBeforeInput">createdBeforeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.dueDateInput">dueDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.iidsInput">iidsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.issueTypeInput">issueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.labelsInput">labelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.milestoneInput">milestoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.myReactionEmojiInput">myReactionEmojiInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notAssigneeIdInput">notAssigneeIdInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notAuthorIdInput">notAuthorIdInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notLabelsInput">notLabelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notMilestoneInput">notMilestoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notMyReactionEmojiInput">notMyReactionEmojiInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.orderByInput">orderByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.searchInput">searchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.sortInput">sortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.updatedAfterInput">updatedAfterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.updatedBeforeInput">updatedBeforeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.withLabelsDetailsInput">withLabelsDetailsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.assigneeId">assigneeId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.assigneeUsername">assigneeUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.authorId">authorId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.confidential">confidential</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.createdAfter">createdAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.createdBefore">createdBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.dueDate">dueDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.iids">iids</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.issueType">issueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.labels">labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.milestone">milestone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.myReactionEmoji">myReactionEmoji</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notAssigneeId">notAssigneeId</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notAuthorId">notAuthorId</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notLabels">notLabels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notMilestone">notMilestone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notMyReactionEmoji">notMyReactionEmoji</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.orderBy">orderBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.search">search</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.sort">sort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.updatedAfter">updatedAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.updatedBefore">updatedBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.withLabelsDetails">withLabelsDetails</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `issues`<sup>Required</sup> <a name="issues" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.issues"></a>

```typescript
public readonly issues: DataGitlabProjectIssuesIssuesList;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList">DataGitlabProjectIssuesIssuesList</a>

---

##### `assigneeIdInput`<sup>Optional</sup> <a name="assigneeIdInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.assigneeIdInput"></a>

```typescript
public readonly assigneeIdInput: number;
```

- *Type:* number

---

##### `assigneeUsernameInput`<sup>Optional</sup> <a name="assigneeUsernameInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.assigneeUsernameInput"></a>

```typescript
public readonly assigneeUsernameInput: string;
```

- *Type:* string

---

##### `authorIdInput`<sup>Optional</sup> <a name="authorIdInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.authorIdInput"></a>

```typescript
public readonly authorIdInput: number;
```

- *Type:* number

---

##### `confidentialInput`<sup>Optional</sup> <a name="confidentialInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.confidentialInput"></a>

```typescript
public readonly confidentialInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `createdAfterInput`<sup>Optional</sup> <a name="createdAfterInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.createdAfterInput"></a>

```typescript
public readonly createdAfterInput: string;
```

- *Type:* string

---

##### `createdBeforeInput`<sup>Optional</sup> <a name="createdBeforeInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.createdBeforeInput"></a>

```typescript
public readonly createdBeforeInput: string;
```

- *Type:* string

---

##### `dueDateInput`<sup>Optional</sup> <a name="dueDateInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.dueDateInput"></a>

```typescript
public readonly dueDateInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `iidsInput`<sup>Optional</sup> <a name="iidsInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.iidsInput"></a>

```typescript
public readonly iidsInput: number[];
```

- *Type:* number[]

---

##### `issueTypeInput`<sup>Optional</sup> <a name="issueTypeInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.issueTypeInput"></a>

```typescript
public readonly issueTypeInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.labelsInput"></a>

```typescript
public readonly labelsInput: string[];
```

- *Type:* string[]

---

##### `milestoneInput`<sup>Optional</sup> <a name="milestoneInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.milestoneInput"></a>

```typescript
public readonly milestoneInput: string;
```

- *Type:* string

---

##### `myReactionEmojiInput`<sup>Optional</sup> <a name="myReactionEmojiInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.myReactionEmojiInput"></a>

```typescript
public readonly myReactionEmojiInput: string;
```

- *Type:* string

---

##### `notAssigneeIdInput`<sup>Optional</sup> <a name="notAssigneeIdInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notAssigneeIdInput"></a>

```typescript
public readonly notAssigneeIdInput: number[];
```

- *Type:* number[]

---

##### `notAuthorIdInput`<sup>Optional</sup> <a name="notAuthorIdInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notAuthorIdInput"></a>

```typescript
public readonly notAuthorIdInput: number[];
```

- *Type:* number[]

---

##### `notLabelsInput`<sup>Optional</sup> <a name="notLabelsInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notLabelsInput"></a>

```typescript
public readonly notLabelsInput: string[];
```

- *Type:* string[]

---

##### `notMilestoneInput`<sup>Optional</sup> <a name="notMilestoneInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notMilestoneInput"></a>

```typescript
public readonly notMilestoneInput: string;
```

- *Type:* string

---

##### `notMyReactionEmojiInput`<sup>Optional</sup> <a name="notMyReactionEmojiInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notMyReactionEmojiInput"></a>

```typescript
public readonly notMyReactionEmojiInput: string[];
```

- *Type:* string[]

---

##### `orderByInput`<sup>Optional</sup> <a name="orderByInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.orderByInput"></a>

```typescript
public readonly orderByInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.searchInput"></a>

```typescript
public readonly searchInput: string;
```

- *Type:* string

---

##### `sortInput`<sup>Optional</sup> <a name="sortInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.sortInput"></a>

```typescript
public readonly sortInput: string;
```

- *Type:* string

---

##### `updatedAfterInput`<sup>Optional</sup> <a name="updatedAfterInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.updatedAfterInput"></a>

```typescript
public readonly updatedAfterInput: string;
```

- *Type:* string

---

##### `updatedBeforeInput`<sup>Optional</sup> <a name="updatedBeforeInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.updatedBeforeInput"></a>

```typescript
public readonly updatedBeforeInput: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `withLabelsDetailsInput`<sup>Optional</sup> <a name="withLabelsDetailsInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.withLabelsDetailsInput"></a>

```typescript
public readonly withLabelsDetailsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `assigneeId`<sup>Required</sup> <a name="assigneeId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.assigneeId"></a>

```typescript
public readonly assigneeId: number;
```

- *Type:* number

---

##### `assigneeUsername`<sup>Required</sup> <a name="assigneeUsername" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.assigneeUsername"></a>

```typescript
public readonly assigneeUsername: string;
```

- *Type:* string

---

##### `authorId`<sup>Required</sup> <a name="authorId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.authorId"></a>

```typescript
public readonly authorId: number;
```

- *Type:* number

---

##### `confidential`<sup>Required</sup> <a name="confidential" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.confidential"></a>

```typescript
public readonly confidential: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `createdAfter`<sup>Required</sup> <a name="createdAfter" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.createdAfter"></a>

```typescript
public readonly createdAfter: string;
```

- *Type:* string

---

##### `createdBefore`<sup>Required</sup> <a name="createdBefore" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.createdBefore"></a>

```typescript
public readonly createdBefore: string;
```

- *Type:* string

---

##### `dueDate`<sup>Required</sup> <a name="dueDate" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.dueDate"></a>

```typescript
public readonly dueDate: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `iids`<sup>Required</sup> <a name="iids" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.iids"></a>

```typescript
public readonly iids: number[];
```

- *Type:* number[]

---

##### `issueType`<sup>Required</sup> <a name="issueType" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.issueType"></a>

```typescript
public readonly issueType: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

---

##### `milestone`<sup>Required</sup> <a name="milestone" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.milestone"></a>

```typescript
public readonly milestone: string;
```

- *Type:* string

---

##### `myReactionEmoji`<sup>Required</sup> <a name="myReactionEmoji" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.myReactionEmoji"></a>

```typescript
public readonly myReactionEmoji: string;
```

- *Type:* string

---

##### `notAssigneeId`<sup>Required</sup> <a name="notAssigneeId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notAssigneeId"></a>

```typescript
public readonly notAssigneeId: number[];
```

- *Type:* number[]

---

##### `notAuthorId`<sup>Required</sup> <a name="notAuthorId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notAuthorId"></a>

```typescript
public readonly notAuthorId: number[];
```

- *Type:* number[]

---

##### `notLabels`<sup>Required</sup> <a name="notLabels" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notLabels"></a>

```typescript
public readonly notLabels: string[];
```

- *Type:* string[]

---

##### `notMilestone`<sup>Required</sup> <a name="notMilestone" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notMilestone"></a>

```typescript
public readonly notMilestone: string;
```

- *Type:* string

---

##### `notMyReactionEmoji`<sup>Required</sup> <a name="notMyReactionEmoji" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notMyReactionEmoji"></a>

```typescript
public readonly notMyReactionEmoji: string[];
```

- *Type:* string[]

---

##### `orderBy`<sup>Required</sup> <a name="orderBy" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.orderBy"></a>

```typescript
public readonly orderBy: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

---

##### `sort`<sup>Required</sup> <a name="sort" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.sort"></a>

```typescript
public readonly sort: string;
```

- *Type:* string

---

##### `updatedAfter`<sup>Required</sup> <a name="updatedAfter" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.updatedAfter"></a>

```typescript
public readonly updatedAfter: string;
```

- *Type:* string

---

##### `updatedBefore`<sup>Required</sup> <a name="updatedBefore" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.updatedBefore"></a>

```typescript
public readonly updatedBefore: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `withLabelsDetails`<sup>Required</sup> <a name="withLabelsDetails" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.withLabelsDetails"></a>

```typescript
public readonly withLabelsDetails: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabProjectIssuesConfig <a name="DataGitlabProjectIssuesConfig" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.Initializer"></a>

```typescript
import { dataGitlabProjectIssues } from '@cdktf/provider-gitlab'

const dataGitlabProjectIssuesConfig: dataGitlabProjectIssues.DataGitlabProjectIssuesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.project">project</a></code> | <code>string</code> | The name or id of the project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.assigneeId">assigneeId</a></code> | <code>number</code> | Return issues assigned to the given user id. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.assigneeUsername">assigneeUsername</a></code> | <code>string</code> | Return issues assigned to the given username. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.authorId">authorId</a></code> | <code>number</code> | Return issues created by the given user id. Combine with scope=all or scope=assigned_to_me. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.confidential">confidential</a></code> | <code>boolean \| cdktf.IResolvable</code> | Filter confidential or public issues. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.createdAfter">createdAfter</a></code> | <code>string</code> | Return issues created on or after the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.createdBefore">createdBefore</a></code> | <code>string</code> | Return issues created on or before the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.dueDate">dueDate</a></code> | <code>string</code> | Return issues that have no due date, are overdue, or whose due date is this week, this month, or between two weeks ago and next month. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/data-sources/project_issues#id DataGitlabProjectIssues#id}. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.iids">iids</a></code> | <code>number[]</code> | Return only the issues having the given iid. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.issueType">issueType</a></code> | <code>string</code> | Filter to a given type of issue. Valid values are [issue incident test_case]. (Introduced in GitLab 13.12). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.labels">labels</a></code> | <code>string[]</code> | Return issues with labels. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.milestone">milestone</a></code> | <code>string</code> | The milestone title. None lists all issues with no milestone. Any lists all issues that have an assigned milestone. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.myReactionEmoji">myReactionEmoji</a></code> | <code>string</code> | Return issues reacted by the authenticated user by the given emoji. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notAssigneeId">notAssigneeId</a></code> | <code>number[]</code> | Return issues that do not match the assignee id. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notAuthorId">notAuthorId</a></code> | <code>number[]</code> | Return issues that do not match the author id. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notLabels">notLabels</a></code> | <code>string[]</code> | Return issues that do not match the labels. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notMilestone">notMilestone</a></code> | <code>string</code> | Return issues that do not match the milestone. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notMyReactionEmoji">notMyReactionEmoji</a></code> | <code>string[]</code> | Return issues not reacted by the authenticated user by the given emoji. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.orderBy">orderBy</a></code> | <code>string</code> | Return issues ordered by. Valid values are `created_at`, `updated_at`, `priority`, `due_date`, `relative_position`, `label_priority`, `milestone_due`, `popularity`, `weight`. Default is created_at. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.scope">scope</a></code> | <code>string</code> | Return issues for the given scope. Valid values are `created_by_me`, `assigned_to_me`, `all`. Defaults to all. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.search">search</a></code> | <code>string</code> | Search project issues against their title and description. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.sort">sort</a></code> | <code>string</code> | Return issues sorted in asc or desc order. Default is desc. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.updatedAfter">updatedAfter</a></code> | <code>string</code> | Return issues updated on or after the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.updatedBefore">updatedBefore</a></code> | <code>string</code> | Return issues updated on or before the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.weight">weight</a></code> | <code>number</code> | Return issues with the specified weight. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.withLabelsDetails">withLabelsDetails</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the response returns more details for each label in labels field: :name, :color, :description, :description_html, :text_color. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The name or id of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/data-sources/project_issues#project DataGitlabProjectIssues#project}

---

##### `assigneeId`<sup>Optional</sup> <a name="assigneeId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.assigneeId"></a>

```typescript
public readonly assigneeId: number;
```

- *Type:* number

Return issues assigned to the given user id.

Mutually exclusive with assignee_username. None returns unassigned issues. Any returns issues with an assignee.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/data-sources/project_issues#assignee_id DataGitlabProjectIssues#assignee_id}

---

##### `assigneeUsername`<sup>Optional</sup> <a name="assigneeUsername" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.assigneeUsername"></a>

```typescript
public readonly assigneeUsername: string;
```

- *Type:* string

Return issues assigned to the given username.

Similar to assignee_id and mutually exclusive with assignee_id. In GitLab CE, the assignee_username array should only contain a single value. Otherwise, an invalid parameter error is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/data-sources/project_issues#assignee_username DataGitlabProjectIssues#assignee_username}

---

##### `authorId`<sup>Optional</sup> <a name="authorId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.authorId"></a>

```typescript
public readonly authorId: number;
```

- *Type:* number

Return issues created by the given user id. Combine with scope=all or scope=assigned_to_me.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/data-sources/project_issues#author_id DataGitlabProjectIssues#author_id}

---

##### `confidential`<sup>Optional</sup> <a name="confidential" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.confidential"></a>

```typescript
public readonly confidential: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Filter confidential or public issues.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/data-sources/project_issues#confidential DataGitlabProjectIssues#confidential}

---

##### `createdAfter`<sup>Optional</sup> <a name="createdAfter" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.createdAfter"></a>

```typescript
public readonly createdAfter: string;
```

- *Type:* string

Return issues created on or after the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/data-sources/project_issues#created_after DataGitlabProjectIssues#created_after}

---

##### `createdBefore`<sup>Optional</sup> <a name="createdBefore" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.createdBefore"></a>

```typescript
public readonly createdBefore: string;
```

- *Type:* string

Return issues created on or before the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/data-sources/project_issues#created_before DataGitlabProjectIssues#created_before}

---

##### `dueDate`<sup>Optional</sup> <a name="dueDate" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.dueDate"></a>

```typescript
public readonly dueDate: string;
```

- *Type:* string

Return issues that have no due date, are overdue, or whose due date is this week, this month, or between two weeks ago and next month.

Accepts: 0 (no due date), any, today, tomorrow, overdue, week, month, next_month_and_previous_two_weeks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/data-sources/project_issues#due_date DataGitlabProjectIssues#due_date}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/data-sources/project_issues#id DataGitlabProjectIssues#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `iids`<sup>Optional</sup> <a name="iids" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.iids"></a>

```typescript
public readonly iids: number[];
```

- *Type:* number[]

Return only the issues having the given iid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/data-sources/project_issues#iids DataGitlabProjectIssues#iids}

---

##### `issueType`<sup>Optional</sup> <a name="issueType" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.issueType"></a>

```typescript
public readonly issueType: string;
```

- *Type:* string

Filter to a given type of issue. Valid values are [issue incident test_case]. (Introduced in GitLab 13.12).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/data-sources/project_issues#issue_type DataGitlabProjectIssues#issue_type}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

Return issues with labels.

Issues must have all labels to be returned. None lists all issues with no labels. Any lists all issues with at least one label. No+Label (Deprecated) lists all issues with no labels. Predefined names are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/data-sources/project_issues#labels DataGitlabProjectIssues#labels}

---

##### `milestone`<sup>Optional</sup> <a name="milestone" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.milestone"></a>

```typescript
public readonly milestone: string;
```

- *Type:* string

The milestone title. None lists all issues with no milestone. Any lists all issues that have an assigned milestone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/data-sources/project_issues#milestone DataGitlabProjectIssues#milestone}

---

##### `myReactionEmoji`<sup>Optional</sup> <a name="myReactionEmoji" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.myReactionEmoji"></a>

```typescript
public readonly myReactionEmoji: string;
```

- *Type:* string

Return issues reacted by the authenticated user by the given emoji.

None returns issues not given a reaction. Any returns issues given at least one reaction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/data-sources/project_issues#my_reaction_emoji DataGitlabProjectIssues#my_reaction_emoji}

---

##### `notAssigneeId`<sup>Optional</sup> <a name="notAssigneeId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notAssigneeId"></a>

```typescript
public readonly notAssigneeId: number[];
```

- *Type:* number[]

Return issues that do not match the assignee id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/data-sources/project_issues#not_assignee_id DataGitlabProjectIssues#not_assignee_id}

---

##### `notAuthorId`<sup>Optional</sup> <a name="notAuthorId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notAuthorId"></a>

```typescript
public readonly notAuthorId: number[];
```

- *Type:* number[]

Return issues that do not match the author id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/data-sources/project_issues#not_author_id DataGitlabProjectIssues#not_author_id}

---

##### `notLabels`<sup>Optional</sup> <a name="notLabels" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notLabels"></a>

```typescript
public readonly notLabels: string[];
```

- *Type:* string[]

Return issues that do not match the labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/data-sources/project_issues#not_labels DataGitlabProjectIssues#not_labels}

---

##### `notMilestone`<sup>Optional</sup> <a name="notMilestone" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notMilestone"></a>

```typescript
public readonly notMilestone: string;
```

- *Type:* string

Return issues that do not match the milestone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/data-sources/project_issues#not_milestone DataGitlabProjectIssues#not_milestone}

---

##### `notMyReactionEmoji`<sup>Optional</sup> <a name="notMyReactionEmoji" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notMyReactionEmoji"></a>

```typescript
public readonly notMyReactionEmoji: string[];
```

- *Type:* string[]

Return issues not reacted by the authenticated user by the given emoji.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/data-sources/project_issues#not_my_reaction_emoji DataGitlabProjectIssues#not_my_reaction_emoji}

---

##### `orderBy`<sup>Optional</sup> <a name="orderBy" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.orderBy"></a>

```typescript
public readonly orderBy: string;
```

- *Type:* string

Return issues ordered by. Valid values are `created_at`, `updated_at`, `priority`, `due_date`, `relative_position`, `label_priority`, `milestone_due`, `popularity`, `weight`. Default is created_at.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/data-sources/project_issues#order_by DataGitlabProjectIssues#order_by}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Return issues for the given scope. Valid values are `created_by_me`, `assigned_to_me`, `all`. Defaults to all.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/data-sources/project_issues#scope DataGitlabProjectIssues#scope}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

Search project issues against their title and description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/data-sources/project_issues#search DataGitlabProjectIssues#search}

---

##### `sort`<sup>Optional</sup> <a name="sort" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.sort"></a>

```typescript
public readonly sort: string;
```

- *Type:* string

Return issues sorted in asc or desc order. Default is desc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/data-sources/project_issues#sort DataGitlabProjectIssues#sort}

---

##### `updatedAfter`<sup>Optional</sup> <a name="updatedAfter" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.updatedAfter"></a>

```typescript
public readonly updatedAfter: string;
```

- *Type:* string

Return issues updated on or after the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/data-sources/project_issues#updated_after DataGitlabProjectIssues#updated_after}

---

##### `updatedBefore`<sup>Optional</sup> <a name="updatedBefore" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.updatedBefore"></a>

```typescript
public readonly updatedBefore: string;
```

- *Type:* string

Return issues updated on or before the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/data-sources/project_issues#updated_before DataGitlabProjectIssues#updated_before}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Return issues with the specified weight.

None returns issues with no weight assigned. Any returns issues with a weight assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/data-sources/project_issues#weight DataGitlabProjectIssues#weight}

---

##### `withLabelsDetails`<sup>Optional</sup> <a name="withLabelsDetails" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.withLabelsDetails"></a>

```typescript
public readonly withLabelsDetails: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the response returns more details for each label in labels field: :name, :color, :description, :description_html, :text_color.

Default is false. description_html was introduced in GitLab 12.7

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.2.0/docs/data-sources/project_issues#with_labels_details DataGitlabProjectIssues#with_labels_details}

---

### DataGitlabProjectIssuesIssues <a name="DataGitlabProjectIssuesIssues" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssues.Initializer"></a>

```typescript
import { dataGitlabProjectIssues } from '@cdktf/provider-gitlab'

const dataGitlabProjectIssuesIssues: dataGitlabProjectIssues.DataGitlabProjectIssuesIssues = { ... }
```


### DataGitlabProjectIssuesIssuesTaskCompletionStatus <a name="DataGitlabProjectIssuesIssuesTaskCompletionStatus" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatus.Initializer"></a>

```typescript
import { dataGitlabProjectIssues } from '@cdktf/provider-gitlab'

const dataGitlabProjectIssuesIssuesTaskCompletionStatus: dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatus = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabProjectIssuesIssuesList <a name="DataGitlabProjectIssuesIssuesList" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.Initializer"></a>

```typescript
import { dataGitlabProjectIssues } from '@cdktf/provider-gitlab'

new dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.get"></a>

```typescript
public get(index: number): DataGitlabProjectIssuesIssuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGitlabProjectIssuesIssuesOutputReference <a name="DataGitlabProjectIssuesIssuesOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.Initializer"></a>

```typescript
import { dataGitlabProjectIssues } from '@cdktf/provider-gitlab'

new dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.assigneeIds">assigneeIds</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.authorId">authorId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.closedAt">closedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.closedByUserId">closedByUserId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.confidential">confidential</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.discussionLocked">discussionLocked</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.discussionToResolve">discussionToResolve</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.downvotes">downvotes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.dueDate">dueDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.epicId">epicId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.epicIssueId">epicIssueId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.humanTimeEstimate">humanTimeEstimate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.humanTotalTimeSpent">humanTotalTimeSpent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.iid">iid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.issueId">issueId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.issueLinkId">issueLinkId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.issueType">issueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.labels">labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.links">links</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.mergeRequestsCount">mergeRequestsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.mergeRequestToResolveDiscussionsOf">mergeRequestToResolveDiscussionsOf</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.milestoneId">milestoneId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.movedToId">movedToId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.references">references</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.subscribed">subscribed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.taskCompletionStatus">taskCompletionStatus</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList">DataGitlabProjectIssuesIssuesTaskCompletionStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.timeEstimate">timeEstimate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.totalTimeSpent">totalTimeSpent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.upvotes">upvotes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.userNotesCount">userNotesCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.webUrl">webUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssues">DataGitlabProjectIssuesIssues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `assigneeIds`<sup>Required</sup> <a name="assigneeIds" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.assigneeIds"></a>

```typescript
public readonly assigneeIds: number[];
```

- *Type:* number[]

---

##### `authorId`<sup>Required</sup> <a name="authorId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.authorId"></a>

```typescript
public readonly authorId: number;
```

- *Type:* number

---

##### `closedAt`<sup>Required</sup> <a name="closedAt" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.closedAt"></a>

```typescript
public readonly closedAt: string;
```

- *Type:* string

---

##### `closedByUserId`<sup>Required</sup> <a name="closedByUserId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.closedByUserId"></a>

```typescript
public readonly closedByUserId: number;
```

- *Type:* number

---

##### `confidential`<sup>Required</sup> <a name="confidential" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.confidential"></a>

```typescript
public readonly confidential: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `discussionLocked`<sup>Required</sup> <a name="discussionLocked" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.discussionLocked"></a>

```typescript
public readonly discussionLocked: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `discussionToResolve`<sup>Required</sup> <a name="discussionToResolve" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.discussionToResolve"></a>

```typescript
public readonly discussionToResolve: string;
```

- *Type:* string

---

##### `downvotes`<sup>Required</sup> <a name="downvotes" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.downvotes"></a>

```typescript
public readonly downvotes: number;
```

- *Type:* number

---

##### `dueDate`<sup>Required</sup> <a name="dueDate" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.dueDate"></a>

```typescript
public readonly dueDate: string;
```

- *Type:* string

---

##### `epicId`<sup>Required</sup> <a name="epicId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.epicId"></a>

```typescript
public readonly epicId: number;
```

- *Type:* number

---

##### `epicIssueId`<sup>Required</sup> <a name="epicIssueId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.epicIssueId"></a>

```typescript
public readonly epicIssueId: number;
```

- *Type:* number

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `humanTimeEstimate`<sup>Required</sup> <a name="humanTimeEstimate" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.humanTimeEstimate"></a>

```typescript
public readonly humanTimeEstimate: string;
```

- *Type:* string

---

##### `humanTotalTimeSpent`<sup>Required</sup> <a name="humanTotalTimeSpent" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.humanTotalTimeSpent"></a>

```typescript
public readonly humanTotalTimeSpent: string;
```

- *Type:* string

---

##### `iid`<sup>Required</sup> <a name="iid" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.iid"></a>

```typescript
public readonly iid: number;
```

- *Type:* number

---

##### `issueId`<sup>Required</sup> <a name="issueId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.issueId"></a>

```typescript
public readonly issueId: number;
```

- *Type:* number

---

##### `issueLinkId`<sup>Required</sup> <a name="issueLinkId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.issueLinkId"></a>

```typescript
public readonly issueLinkId: number;
```

- *Type:* number

---

##### `issueType`<sup>Required</sup> <a name="issueType" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.issueType"></a>

```typescript
public readonly issueType: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.links"></a>

```typescript
public readonly links: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `mergeRequestsCount`<sup>Required</sup> <a name="mergeRequestsCount" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.mergeRequestsCount"></a>

```typescript
public readonly mergeRequestsCount: number;
```

- *Type:* number

---

##### `mergeRequestToResolveDiscussionsOf`<sup>Required</sup> <a name="mergeRequestToResolveDiscussionsOf" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.mergeRequestToResolveDiscussionsOf"></a>

```typescript
public readonly mergeRequestToResolveDiscussionsOf: number;
```

- *Type:* number

---

##### `milestoneId`<sup>Required</sup> <a name="milestoneId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.milestoneId"></a>

```typescript
public readonly milestoneId: number;
```

- *Type:* number

---

##### `movedToId`<sup>Required</sup> <a name="movedToId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.movedToId"></a>

```typescript
public readonly movedToId: number;
```

- *Type:* number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `references`<sup>Required</sup> <a name="references" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.references"></a>

```typescript
public readonly references: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subscribed`<sup>Required</sup> <a name="subscribed" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.subscribed"></a>

```typescript
public readonly subscribed: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `taskCompletionStatus`<sup>Required</sup> <a name="taskCompletionStatus" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.taskCompletionStatus"></a>

```typescript
public readonly taskCompletionStatus: DataGitlabProjectIssuesIssuesTaskCompletionStatusList;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList">DataGitlabProjectIssuesIssuesTaskCompletionStatusList</a>

---

##### `timeEstimate`<sup>Required</sup> <a name="timeEstimate" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.timeEstimate"></a>

```typescript
public readonly timeEstimate: number;
```

- *Type:* number

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `totalTimeSpent`<sup>Required</sup> <a name="totalTimeSpent" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.totalTimeSpent"></a>

```typescript
public readonly totalTimeSpent: number;
```

- *Type:* number

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `upvotes`<sup>Required</sup> <a name="upvotes" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.upvotes"></a>

```typescript
public readonly upvotes: number;
```

- *Type:* number

---

##### `userNotesCount`<sup>Required</sup> <a name="userNotesCount" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.userNotesCount"></a>

```typescript
public readonly userNotesCount: number;
```

- *Type:* number

---

##### `webUrl`<sup>Required</sup> <a name="webUrl" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.webUrl"></a>

```typescript
public readonly webUrl: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGitlabProjectIssuesIssues;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssues">DataGitlabProjectIssuesIssues</a>

---


### DataGitlabProjectIssuesIssuesTaskCompletionStatusList <a name="DataGitlabProjectIssuesIssuesTaskCompletionStatusList" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.Initializer"></a>

```typescript
import { dataGitlabProjectIssues } from '@cdktf/provider-gitlab'

new dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.get"></a>

```typescript
public get(index: number): DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference <a name="DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.Initializer"></a>

```typescript
import { dataGitlabProjectIssues } from '@cdktf/provider-gitlab'

new dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.completedCount">completedCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatus">DataGitlabProjectIssuesIssuesTaskCompletionStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `completedCount`<sup>Required</sup> <a name="completedCount" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.completedCount"></a>

```typescript
public readonly completedCount: number;
```

- *Type:* number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGitlabProjectIssuesIssuesTaskCompletionStatus;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatus">DataGitlabProjectIssuesIssuesTaskCompletionStatus</a>

---



