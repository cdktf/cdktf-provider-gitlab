# `dataGitlabProjectMergeRequests` Submodule <a name="`dataGitlabProjectMergeRequests` Submodule" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabProjectMergeRequests <a name="DataGitlabProjectMergeRequests" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_merge_requests gitlab_project_merge_requests}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer"></a>

```typescript
import { dataGitlabProjectMergeRequests } from '@cdktf/provider-gitlab'

new dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests(scope: Construct, id: string, config: DataGitlabProjectMergeRequestsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig">DataGitlabProjectMergeRequestsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig">DataGitlabProjectMergeRequestsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetAuthorId">resetAuthorId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetAuthorUsername">resetAuthorUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetCreatedAfter">resetCreatedAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetCreatedBefore">resetCreatedBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetIids">resetIids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetMilestone">resetMilestone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetMyReactionEmoji">resetMyReactionEmoji</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetOrderBy">resetOrderBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetReviewerUsername">resetReviewerUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetSearch">resetSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetSort">resetSort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetSourceBranch">resetSourceBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetTargetBranch">resetTargetBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetUpdatedAfter">resetUpdatedAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetUpdatedBefore">resetUpdatedBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetWip">resetWip</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAuthorId` <a name="resetAuthorId" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetAuthorId"></a>

```typescript
public resetAuthorId(): void
```

##### `resetAuthorUsername` <a name="resetAuthorUsername" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetAuthorUsername"></a>

```typescript
public resetAuthorUsername(): void
```

##### `resetCreatedAfter` <a name="resetCreatedAfter" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetCreatedAfter"></a>

```typescript
public resetCreatedAfter(): void
```

##### `resetCreatedBefore` <a name="resetCreatedBefore" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetCreatedBefore"></a>

```typescript
public resetCreatedBefore(): void
```

##### `resetIids` <a name="resetIids" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetIids"></a>

```typescript
public resetIids(): void
```

##### `resetMilestone` <a name="resetMilestone" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetMilestone"></a>

```typescript
public resetMilestone(): void
```

##### `resetMyReactionEmoji` <a name="resetMyReactionEmoji" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetMyReactionEmoji"></a>

```typescript
public resetMyReactionEmoji(): void
```

##### `resetOrderBy` <a name="resetOrderBy" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetOrderBy"></a>

```typescript
public resetOrderBy(): void
```

##### `resetReviewerUsername` <a name="resetReviewerUsername" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetReviewerUsername"></a>

```typescript
public resetReviewerUsername(): void
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetScope"></a>

```typescript
public resetScope(): void
```

##### `resetSearch` <a name="resetSearch" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetSearch"></a>

```typescript
public resetSearch(): void
```

##### `resetSort` <a name="resetSort" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetSort"></a>

```typescript
public resetSort(): void
```

##### `resetSourceBranch` <a name="resetSourceBranch" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetSourceBranch"></a>

```typescript
public resetSourceBranch(): void
```

##### `resetState` <a name="resetState" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTargetBranch` <a name="resetTargetBranch" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetTargetBranch"></a>

```typescript
public resetTargetBranch(): void
```

##### `resetUpdatedAfter` <a name="resetUpdatedAfter" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetUpdatedAfter"></a>

```typescript
public resetUpdatedAfter(): void
```

##### `resetUpdatedBefore` <a name="resetUpdatedBefore" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetUpdatedBefore"></a>

```typescript
public resetUpdatedBefore(): void
```

##### `resetWip` <a name="resetWip" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetWip"></a>

```typescript
public resetWip(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabProjectMergeRequests resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.isConstruct"></a>

```typescript
import { dataGitlabProjectMergeRequests } from '@cdktf/provider-gitlab'

dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.isTerraformElement"></a>

```typescript
import { dataGitlabProjectMergeRequests } from '@cdktf/provider-gitlab'

dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.isTerraformDataSource"></a>

```typescript
import { dataGitlabProjectMergeRequests } from '@cdktf/provider-gitlab'

dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.generateConfigForImport"></a>

```typescript
import { dataGitlabProjectMergeRequests } from '@cdktf/provider-gitlab'

dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGitlabProjectMergeRequests resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGitlabProjectMergeRequests to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGitlabProjectMergeRequests that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_merge_requests#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabProjectMergeRequests to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.mergeRequests">mergeRequests</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList">DataGitlabProjectMergeRequestsMergeRequestsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.authorIdInput">authorIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.authorUsernameInput">authorUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.createdAfterInput">createdAfterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.createdBeforeInput">createdBeforeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.iidsInput">iidsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.milestoneInput">milestoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.myReactionEmojiInput">myReactionEmojiInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.orderByInput">orderByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.reviewerUsernameInput">reviewerUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.searchInput">searchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.sortInput">sortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.sourceBranchInput">sourceBranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.targetBranchInput">targetBranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.updatedAfterInput">updatedAfterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.updatedBeforeInput">updatedBeforeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.wipInput">wipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.authorId">authorId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.authorUsername">authorUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.createdAfter">createdAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.createdBefore">createdBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.iids">iids</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.milestone">milestone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.myReactionEmoji">myReactionEmoji</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.orderBy">orderBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.reviewerUsername">reviewerUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.search">search</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.sort">sort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.sourceBranch">sourceBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.targetBranch">targetBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.updatedAfter">updatedAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.updatedBefore">updatedBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.wip">wip</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `mergeRequests`<sup>Required</sup> <a name="mergeRequests" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.mergeRequests"></a>

```typescript
public readonly mergeRequests: DataGitlabProjectMergeRequestsMergeRequestsList;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList">DataGitlabProjectMergeRequestsMergeRequestsList</a>

---

##### `authorIdInput`<sup>Optional</sup> <a name="authorIdInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.authorIdInput"></a>

```typescript
public readonly authorIdInput: number;
```

- *Type:* number

---

##### `authorUsernameInput`<sup>Optional</sup> <a name="authorUsernameInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.authorUsernameInput"></a>

```typescript
public readonly authorUsernameInput: string;
```

- *Type:* string

---

##### `createdAfterInput`<sup>Optional</sup> <a name="createdAfterInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.createdAfterInput"></a>

```typescript
public readonly createdAfterInput: string;
```

- *Type:* string

---

##### `createdBeforeInput`<sup>Optional</sup> <a name="createdBeforeInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.createdBeforeInput"></a>

```typescript
public readonly createdBeforeInput: string;
```

- *Type:* string

---

##### `iidsInput`<sup>Optional</sup> <a name="iidsInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.iidsInput"></a>

```typescript
public readonly iidsInput: number[];
```

- *Type:* number[]

---

##### `milestoneInput`<sup>Optional</sup> <a name="milestoneInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.milestoneInput"></a>

```typescript
public readonly milestoneInput: string;
```

- *Type:* string

---

##### `myReactionEmojiInput`<sup>Optional</sup> <a name="myReactionEmojiInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.myReactionEmojiInput"></a>

```typescript
public readonly myReactionEmojiInput: string;
```

- *Type:* string

---

##### `orderByInput`<sup>Optional</sup> <a name="orderByInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.orderByInput"></a>

```typescript
public readonly orderByInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `reviewerUsernameInput`<sup>Optional</sup> <a name="reviewerUsernameInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.reviewerUsernameInput"></a>

```typescript
public readonly reviewerUsernameInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.searchInput"></a>

```typescript
public readonly searchInput: string;
```

- *Type:* string

---

##### `sortInput`<sup>Optional</sup> <a name="sortInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.sortInput"></a>

```typescript
public readonly sortInput: string;
```

- *Type:* string

---

##### `sourceBranchInput`<sup>Optional</sup> <a name="sourceBranchInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.sourceBranchInput"></a>

```typescript
public readonly sourceBranchInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `targetBranchInput`<sup>Optional</sup> <a name="targetBranchInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.targetBranchInput"></a>

```typescript
public readonly targetBranchInput: string;
```

- *Type:* string

---

##### `updatedAfterInput`<sup>Optional</sup> <a name="updatedAfterInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.updatedAfterInput"></a>

```typescript
public readonly updatedAfterInput: string;
```

- *Type:* string

---

##### `updatedBeforeInput`<sup>Optional</sup> <a name="updatedBeforeInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.updatedBeforeInput"></a>

```typescript
public readonly updatedBeforeInput: string;
```

- *Type:* string

---

##### `wipInput`<sup>Optional</sup> <a name="wipInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.wipInput"></a>

```typescript
public readonly wipInput: string;
```

- *Type:* string

---

##### `authorId`<sup>Required</sup> <a name="authorId" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.authorId"></a>

```typescript
public readonly authorId: number;
```

- *Type:* number

---

##### `authorUsername`<sup>Required</sup> <a name="authorUsername" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.authorUsername"></a>

```typescript
public readonly authorUsername: string;
```

- *Type:* string

---

##### `createdAfter`<sup>Required</sup> <a name="createdAfter" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.createdAfter"></a>

```typescript
public readonly createdAfter: string;
```

- *Type:* string

---

##### `createdBefore`<sup>Required</sup> <a name="createdBefore" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.createdBefore"></a>

```typescript
public readonly createdBefore: string;
```

- *Type:* string

---

##### `iids`<sup>Required</sup> <a name="iids" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.iids"></a>

```typescript
public readonly iids: number[];
```

- *Type:* number[]

---

##### `milestone`<sup>Required</sup> <a name="milestone" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.milestone"></a>

```typescript
public readonly milestone: string;
```

- *Type:* string

---

##### `myReactionEmoji`<sup>Required</sup> <a name="myReactionEmoji" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.myReactionEmoji"></a>

```typescript
public readonly myReactionEmoji: string;
```

- *Type:* string

---

##### `orderBy`<sup>Required</sup> <a name="orderBy" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.orderBy"></a>

```typescript
public readonly orderBy: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `reviewerUsername`<sup>Required</sup> <a name="reviewerUsername" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.reviewerUsername"></a>

```typescript
public readonly reviewerUsername: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

---

##### `sort`<sup>Required</sup> <a name="sort" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.sort"></a>

```typescript
public readonly sort: string;
```

- *Type:* string

---

##### `sourceBranch`<sup>Required</sup> <a name="sourceBranch" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.sourceBranch"></a>

```typescript
public readonly sourceBranch: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `targetBranch`<sup>Required</sup> <a name="targetBranch" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.targetBranch"></a>

```typescript
public readonly targetBranch: string;
```

- *Type:* string

---

##### `updatedAfter`<sup>Required</sup> <a name="updatedAfter" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.updatedAfter"></a>

```typescript
public readonly updatedAfter: string;
```

- *Type:* string

---

##### `updatedBefore`<sup>Required</sup> <a name="updatedBefore" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.updatedBefore"></a>

```typescript
public readonly updatedBefore: string;
```

- *Type:* string

---

##### `wip`<sup>Required</sup> <a name="wip" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.wip"></a>

```typescript
public readonly wip: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabProjectMergeRequestsConfig <a name="DataGitlabProjectMergeRequestsConfig" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.Initializer"></a>

```typescript
import { dataGitlabProjectMergeRequests } from '@cdktf/provider-gitlab'

const dataGitlabProjectMergeRequestsConfig: dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.project">project</a></code> | <code>string</code> | The ID or path of the project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.authorId">authorId</a></code> | <code>number</code> | Return merge requests created by the given user ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.authorUsername">authorUsername</a></code> | <code>string</code> | Return merge requests created by the given username. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.createdAfter">createdAfter</a></code> | <code>string</code> | Return merge requests created after the given time. Expected in RFC3339 format (2006-01-02T15:04:05Z). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.createdBefore">createdBefore</a></code> | <code>string</code> | Return merge requests created before the given time. Expected in RFC3339 format (2006-01-02T15:04:05Z). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.iids">iids</a></code> | <code>number[]</code> | The unique internal IDs of the merge requests. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.milestone">milestone</a></code> | <code>string</code> | Return only merge requests for a specific milestone. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.myReactionEmoji">myReactionEmoji</a></code> | <code>string</code> | Return merge requests reacted to by the authenticated user with the given emoji. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.orderBy">orderBy</a></code> | <code>string</code> | Return requests ordered by `created_at`, `title` or `updated_at`. Default is `created_at`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.reviewerUsername">reviewerUsername</a></code> | <code>string</code> | Return merge requests reviewed by the given username. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.scope">scope</a></code> | <code>string</code> | Return merge requests for the given scope: `created_by_me`, `assigned_to_me`, or `all`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.search">search</a></code> | <code>string</code> | Search merge requests against their `title` or `description`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.sort">sort</a></code> | <code>string</code> | Return requests sorted in `asc` or `desc` order. Default is `desc`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.sourceBranch">sourceBranch</a></code> | <code>string</code> | Return merge requests with the given source branch. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.state">state</a></code> | <code>string</code> | Return all merge requests (all) or just those that are opened, closed, locked, or merged. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.targetBranch">targetBranch</a></code> | <code>string</code> | Return merge requests with the given target branch. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.updatedAfter">updatedAfter</a></code> | <code>string</code> | Return merge requests updated after the given time. Expected in RFC3339 format (2006-01-02T15:04:05Z). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.updatedBefore">updatedBefore</a></code> | <code>string</code> | Return merge requests updated before the given time. Expected in RFC3339 format (2006-01-02T15:04:05Z). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.wip">wip</a></code> | <code>string</code> | Filter merge requests against their wip status. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID or path of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_merge_requests#project DataGitlabProjectMergeRequests#project}

---

##### `authorId`<sup>Optional</sup> <a name="authorId" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.authorId"></a>

```typescript
public readonly authorId: number;
```

- *Type:* number

Return merge requests created by the given user ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_merge_requests#author_id DataGitlabProjectMergeRequests#author_id}

---

##### `authorUsername`<sup>Optional</sup> <a name="authorUsername" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.authorUsername"></a>

```typescript
public readonly authorUsername: string;
```

- *Type:* string

Return merge requests created by the given username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_merge_requests#author_username DataGitlabProjectMergeRequests#author_username}

---

##### `createdAfter`<sup>Optional</sup> <a name="createdAfter" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.createdAfter"></a>

```typescript
public readonly createdAfter: string;
```

- *Type:* string

Return merge requests created after the given time. Expected in RFC3339 format (2006-01-02T15:04:05Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_merge_requests#created_after DataGitlabProjectMergeRequests#created_after}

---

##### `createdBefore`<sup>Optional</sup> <a name="createdBefore" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.createdBefore"></a>

```typescript
public readonly createdBefore: string;
```

- *Type:* string

Return merge requests created before the given time. Expected in RFC3339 format (2006-01-02T15:04:05Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_merge_requests#created_before DataGitlabProjectMergeRequests#created_before}

---

##### `iids`<sup>Optional</sup> <a name="iids" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.iids"></a>

```typescript
public readonly iids: number[];
```

- *Type:* number[]

The unique internal IDs of the merge requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_merge_requests#iids DataGitlabProjectMergeRequests#iids}

---

##### `milestone`<sup>Optional</sup> <a name="milestone" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.milestone"></a>

```typescript
public readonly milestone: string;
```

- *Type:* string

Return only merge requests for a specific milestone.

`None` returns merge requests with no milestone. `Any` returns merge requests that have an assigned milestone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_merge_requests#milestone DataGitlabProjectMergeRequests#milestone}

---

##### `myReactionEmoji`<sup>Optional</sup> <a name="myReactionEmoji" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.myReactionEmoji"></a>

```typescript
public readonly myReactionEmoji: string;
```

- *Type:* string

Return merge requests reacted to by the authenticated user with the given emoji.

`None` returns issues not given a reaction. `Any` returns issues given at least one reaction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_merge_requests#my_reaction_emoji DataGitlabProjectMergeRequests#my_reaction_emoji}

---

##### `orderBy`<sup>Optional</sup> <a name="orderBy" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.orderBy"></a>

```typescript
public readonly orderBy: string;
```

- *Type:* string

Return requests ordered by `created_at`, `title` or `updated_at`. Default is `created_at`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_merge_requests#order_by DataGitlabProjectMergeRequests#order_by}

---

##### `reviewerUsername`<sup>Optional</sup> <a name="reviewerUsername" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.reviewerUsername"></a>

```typescript
public readonly reviewerUsername: string;
```

- *Type:* string

Return merge requests reviewed by the given username.

`None` returns merge requests with no reviews. `Any` returns merge requests with any reviewer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_merge_requests#reviewer_username DataGitlabProjectMergeRequests#reviewer_username}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Return merge requests for the given scope: `created_by_me`, `assigned_to_me`, or `all`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_merge_requests#scope DataGitlabProjectMergeRequests#scope}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

Search merge requests against their `title` or `description`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_merge_requests#search DataGitlabProjectMergeRequests#search}

---

##### `sort`<sup>Optional</sup> <a name="sort" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.sort"></a>

```typescript
public readonly sort: string;
```

- *Type:* string

Return requests sorted in `asc` or `desc` order. Default is `desc`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_merge_requests#sort DataGitlabProjectMergeRequests#sort}

---

##### `sourceBranch`<sup>Optional</sup> <a name="sourceBranch" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.sourceBranch"></a>

```typescript
public readonly sourceBranch: string;
```

- *Type:* string

Return merge requests with the given source branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_merge_requests#source_branch DataGitlabProjectMergeRequests#source_branch}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Return all merge requests (all) or just those that are opened, closed, locked, or merged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_merge_requests#state DataGitlabProjectMergeRequests#state}

---

##### `targetBranch`<sup>Optional</sup> <a name="targetBranch" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.targetBranch"></a>

```typescript
public readonly targetBranch: string;
```

- *Type:* string

Return merge requests with the given target branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_merge_requests#target_branch DataGitlabProjectMergeRequests#target_branch}

---

##### `updatedAfter`<sup>Optional</sup> <a name="updatedAfter" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.updatedAfter"></a>

```typescript
public readonly updatedAfter: string;
```

- *Type:* string

Return merge requests updated after the given time. Expected in RFC3339 format (2006-01-02T15:04:05Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_merge_requests#updated_after DataGitlabProjectMergeRequests#updated_after}

---

##### `updatedBefore`<sup>Optional</sup> <a name="updatedBefore" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.updatedBefore"></a>

```typescript
public readonly updatedBefore: string;
```

- *Type:* string

Return merge requests updated before the given time. Expected in RFC3339 format (2006-01-02T15:04:05Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_merge_requests#updated_before DataGitlabProjectMergeRequests#updated_before}

---

##### `wip`<sup>Optional</sup> <a name="wip" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.wip"></a>

```typescript
public readonly wip: string;
```

- *Type:* string

Filter merge requests against their wip status.

`yes` to return only draft merge requests, `no` to return non-draft merge requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_merge_requests#wip DataGitlabProjectMergeRequests#wip}

---

### DataGitlabProjectMergeRequestsMergeRequests <a name="DataGitlabProjectMergeRequestsMergeRequests" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequests"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequests.Initializer"></a>

```typescript
import { dataGitlabProjectMergeRequests } from '@cdktf/provider-gitlab'

const dataGitlabProjectMergeRequestsMergeRequests: dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequests = { ... }
```


### DataGitlabProjectMergeRequestsMergeRequestsAssignee <a name="DataGitlabProjectMergeRequestsMergeRequestsAssignee" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssignee"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssignee.Initializer"></a>

```typescript
import { dataGitlabProjectMergeRequests } from '@cdktf/provider-gitlab'

const dataGitlabProjectMergeRequestsMergeRequestsAssignee: dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssignee = { ... }
```


### DataGitlabProjectMergeRequestsMergeRequestsAssignees <a name="DataGitlabProjectMergeRequestsMergeRequestsAssignees" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssignees"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssignees.Initializer"></a>

```typescript
import { dataGitlabProjectMergeRequests } from '@cdktf/provider-gitlab'

const dataGitlabProjectMergeRequestsMergeRequestsAssignees: dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssignees = { ... }
```


### DataGitlabProjectMergeRequestsMergeRequestsAuthor <a name="DataGitlabProjectMergeRequestsMergeRequestsAuthor" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthor.Initializer"></a>

```typescript
import { dataGitlabProjectMergeRequests } from '@cdktf/provider-gitlab'

const dataGitlabProjectMergeRequestsMergeRequestsAuthor: dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthor = { ... }
```


### DataGitlabProjectMergeRequestsMergeRequestsClosedBy <a name="DataGitlabProjectMergeRequestsMergeRequestsClosedBy" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedBy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedBy.Initializer"></a>

```typescript
import { dataGitlabProjectMergeRequests } from '@cdktf/provider-gitlab'

const dataGitlabProjectMergeRequestsMergeRequestsClosedBy: dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedBy = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference <a name="DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.Initializer"></a>

```typescript
import { dataGitlabProjectMergeRequests } from '@cdktf/provider-gitlab'

new dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.avatarUrl">avatarUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.webUrl">webUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssignee">DataGitlabProjectMergeRequestsMergeRequestsAssignee</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `avatarUrl`<sup>Required</sup> <a name="avatarUrl" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.avatarUrl"></a>

```typescript
public readonly avatarUrl: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `webUrl`<sup>Required</sup> <a name="webUrl" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.webUrl"></a>

```typescript
public readonly webUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGitlabProjectMergeRequestsMergeRequestsAssignee;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssignee">DataGitlabProjectMergeRequestsMergeRequestsAssignee</a>

---


### DataGitlabProjectMergeRequestsMergeRequestsAssigneesList <a name="DataGitlabProjectMergeRequestsMergeRequestsAssigneesList" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.Initializer"></a>

```typescript
import { dataGitlabProjectMergeRequests } from '@cdktf/provider-gitlab'

new dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.get"></a>

```typescript
public get(index: number): DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference <a name="DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.Initializer"></a>

```typescript
import { dataGitlabProjectMergeRequests } from '@cdktf/provider-gitlab'

new dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.avatarUrl">avatarUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.webUrl">webUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssignees">DataGitlabProjectMergeRequestsMergeRequestsAssignees</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `avatarUrl`<sup>Required</sup> <a name="avatarUrl" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.avatarUrl"></a>

```typescript
public readonly avatarUrl: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `webUrl`<sup>Required</sup> <a name="webUrl" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.webUrl"></a>

```typescript
public readonly webUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGitlabProjectMergeRequestsMergeRequestsAssignees;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssignees">DataGitlabProjectMergeRequestsMergeRequestsAssignees</a>

---


### DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference <a name="DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.Initializer"></a>

```typescript
import { dataGitlabProjectMergeRequests } from '@cdktf/provider-gitlab'

new dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.avatarUrl">avatarUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.webUrl">webUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthor">DataGitlabProjectMergeRequestsMergeRequestsAuthor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `avatarUrl`<sup>Required</sup> <a name="avatarUrl" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.avatarUrl"></a>

```typescript
public readonly avatarUrl: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `webUrl`<sup>Required</sup> <a name="webUrl" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.webUrl"></a>

```typescript
public readonly webUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGitlabProjectMergeRequestsMergeRequestsAuthor;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthor">DataGitlabProjectMergeRequestsMergeRequestsAuthor</a>

---


### DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference <a name="DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.Initializer"></a>

```typescript
import { dataGitlabProjectMergeRequests } from '@cdktf/provider-gitlab'

new dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.avatarUrl">avatarUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.webUrl">webUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedBy">DataGitlabProjectMergeRequestsMergeRequestsClosedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `avatarUrl`<sup>Required</sup> <a name="avatarUrl" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.avatarUrl"></a>

```typescript
public readonly avatarUrl: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `webUrl`<sup>Required</sup> <a name="webUrl" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.webUrl"></a>

```typescript
public readonly webUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGitlabProjectMergeRequestsMergeRequestsClosedBy;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedBy">DataGitlabProjectMergeRequestsMergeRequestsClosedBy</a>

---


### DataGitlabProjectMergeRequestsMergeRequestsList <a name="DataGitlabProjectMergeRequestsMergeRequestsList" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.Initializer"></a>

```typescript
import { dataGitlabProjectMergeRequests } from '@cdktf/provider-gitlab'

new dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.get"></a>

```typescript
public get(index: number): DataGitlabProjectMergeRequestsMergeRequestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGitlabProjectMergeRequestsMergeRequestsOutputReference <a name="DataGitlabProjectMergeRequestsMergeRequestsOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.Initializer"></a>

```typescript
import { dataGitlabProjectMergeRequests } from '@cdktf/provider-gitlab'

new dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.assignee">assignee</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference">DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.assignees">assignees</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList">DataGitlabProjectMergeRequestsMergeRequestsAssigneesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.author">author</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference">DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.blockingDiscussionsResolved">blockingDiscussionsResolved</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.closedAt">closedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.closedBy">closedBy</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference">DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.iid">iid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequests">DataGitlabProjectMergeRequestsMergeRequests</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `assignee`<sup>Required</sup> <a name="assignee" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.assignee"></a>

```typescript
public readonly assignee: DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference">DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference</a>

---

##### `assignees`<sup>Required</sup> <a name="assignees" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.assignees"></a>

```typescript
public readonly assignees: DataGitlabProjectMergeRequestsMergeRequestsAssigneesList;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList">DataGitlabProjectMergeRequestsMergeRequestsAssigneesList</a>

---

##### `author`<sup>Required</sup> <a name="author" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.author"></a>

```typescript
public readonly author: DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference">DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference</a>

---

##### `blockingDiscussionsResolved`<sup>Required</sup> <a name="blockingDiscussionsResolved" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.blockingDiscussionsResolved"></a>

```typescript
public readonly blockingDiscussionsResolved: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `closedAt`<sup>Required</sup> <a name="closedAt" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.closedAt"></a>

```typescript
public readonly closedAt: string;
```

- *Type:* string

---

##### `closedBy`<sup>Required</sup> <a name="closedBy" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.closedBy"></a>

```typescript
public readonly closedBy: DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference">DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `iid`<sup>Required</sup> <a name="iid" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.iid"></a>

```typescript
public readonly iid: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGitlabProjectMergeRequestsMergeRequests;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequests">DataGitlabProjectMergeRequestsMergeRequests</a>

---



