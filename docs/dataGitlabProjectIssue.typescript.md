# `dataGitlabProjectIssue` Submodule <a name="`dataGitlabProjectIssue` Submodule" id="@cdktf/provider-gitlab.dataGitlabProjectIssue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabProjectIssue <a name="DataGitlabProjectIssue" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/project_issue gitlab_project_issue}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.Initializer"></a>

```typescript
import { dataGitlabProjectIssue } from '@cdktf/provider-gitlab'

new dataGitlabProjectIssue.DataGitlabProjectIssue(scope: Construct, id: string, config: DataGitlabProjectIssueConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig">DataGitlabProjectIssueConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig">DataGitlabProjectIssueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabProjectIssue resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.isConstruct"></a>

```typescript
import { dataGitlabProjectIssue } from '@cdktf/provider-gitlab'

dataGitlabProjectIssue.DataGitlabProjectIssue.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.isTerraformElement"></a>

```typescript
import { dataGitlabProjectIssue } from '@cdktf/provider-gitlab'

dataGitlabProjectIssue.DataGitlabProjectIssue.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.isTerraformDataSource"></a>

```typescript
import { dataGitlabProjectIssue } from '@cdktf/provider-gitlab'

dataGitlabProjectIssue.DataGitlabProjectIssue.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.generateConfigForImport"></a>

```typescript
import { dataGitlabProjectIssue } from '@cdktf/provider-gitlab'

dataGitlabProjectIssue.DataGitlabProjectIssue.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGitlabProjectIssue resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGitlabProjectIssue to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGitlabProjectIssue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/project_issue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabProjectIssue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.assigneeIds">assigneeIds</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.authorId">authorId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.closedAt">closedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.closedByUserId">closedByUserId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.confidential">confidential</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.discussionLocked">discussionLocked</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.discussionToResolve">discussionToResolve</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.downvotes">downvotes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.dueDate">dueDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.epicId">epicId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.epicIssueId">epicIssueId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.humanTimeEstimate">humanTimeEstimate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.humanTotalTimeSpent">humanTotalTimeSpent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.issueId">issueId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.issueLinkId">issueLinkId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.issueType">issueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.labels">labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.links">links</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.mergeRequestsCount">mergeRequestsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.mergeRequestToResolveDiscussionsOf">mergeRequestToResolveDiscussionsOf</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.milestoneId">milestoneId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.movedToId">movedToId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.references">references</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.subscribed">subscribed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.taskCompletionStatus">taskCompletionStatus</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList">DataGitlabProjectIssueTaskCompletionStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.timeEstimate">timeEstimate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.totalTimeSpent">totalTimeSpent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.upvotes">upvotes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.userNotesCount">userNotesCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.webUrl">webUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.iidInput">iidInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.iid">iid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `assigneeIds`<sup>Required</sup> <a name="assigneeIds" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.assigneeIds"></a>

```typescript
public readonly assigneeIds: number[];
```

- *Type:* number[]

---

##### `authorId`<sup>Required</sup> <a name="authorId" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.authorId"></a>

```typescript
public readonly authorId: number;
```

- *Type:* number

---

##### `closedAt`<sup>Required</sup> <a name="closedAt" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.closedAt"></a>

```typescript
public readonly closedAt: string;
```

- *Type:* string

---

##### `closedByUserId`<sup>Required</sup> <a name="closedByUserId" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.closedByUserId"></a>

```typescript
public readonly closedByUserId: number;
```

- *Type:* number

---

##### `confidential`<sup>Required</sup> <a name="confidential" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.confidential"></a>

```typescript
public readonly confidential: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `discussionLocked`<sup>Required</sup> <a name="discussionLocked" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.discussionLocked"></a>

```typescript
public readonly discussionLocked: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `discussionToResolve`<sup>Required</sup> <a name="discussionToResolve" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.discussionToResolve"></a>

```typescript
public readonly discussionToResolve: string;
```

- *Type:* string

---

##### `downvotes`<sup>Required</sup> <a name="downvotes" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.downvotes"></a>

```typescript
public readonly downvotes: number;
```

- *Type:* number

---

##### `dueDate`<sup>Required</sup> <a name="dueDate" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.dueDate"></a>

```typescript
public readonly dueDate: string;
```

- *Type:* string

---

##### `epicId`<sup>Required</sup> <a name="epicId" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.epicId"></a>

```typescript
public readonly epicId: number;
```

- *Type:* number

---

##### `epicIssueId`<sup>Required</sup> <a name="epicIssueId" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.epicIssueId"></a>

```typescript
public readonly epicIssueId: number;
```

- *Type:* number

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `humanTimeEstimate`<sup>Required</sup> <a name="humanTimeEstimate" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.humanTimeEstimate"></a>

```typescript
public readonly humanTimeEstimate: string;
```

- *Type:* string

---

##### `humanTotalTimeSpent`<sup>Required</sup> <a name="humanTotalTimeSpent" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.humanTotalTimeSpent"></a>

```typescript
public readonly humanTotalTimeSpent: string;
```

- *Type:* string

---

##### `issueId`<sup>Required</sup> <a name="issueId" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.issueId"></a>

```typescript
public readonly issueId: number;
```

- *Type:* number

---

##### `issueLinkId`<sup>Required</sup> <a name="issueLinkId" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.issueLinkId"></a>

```typescript
public readonly issueLinkId: number;
```

- *Type:* number

---

##### `issueType`<sup>Required</sup> <a name="issueType" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.issueType"></a>

```typescript
public readonly issueType: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.links"></a>

```typescript
public readonly links: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `mergeRequestsCount`<sup>Required</sup> <a name="mergeRequestsCount" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.mergeRequestsCount"></a>

```typescript
public readonly mergeRequestsCount: number;
```

- *Type:* number

---

##### `mergeRequestToResolveDiscussionsOf`<sup>Required</sup> <a name="mergeRequestToResolveDiscussionsOf" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.mergeRequestToResolveDiscussionsOf"></a>

```typescript
public readonly mergeRequestToResolveDiscussionsOf: number;
```

- *Type:* number

---

##### `milestoneId`<sup>Required</sup> <a name="milestoneId" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.milestoneId"></a>

```typescript
public readonly milestoneId: number;
```

- *Type:* number

---

##### `movedToId`<sup>Required</sup> <a name="movedToId" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.movedToId"></a>

```typescript
public readonly movedToId: number;
```

- *Type:* number

---

##### `references`<sup>Required</sup> <a name="references" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.references"></a>

```typescript
public readonly references: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subscribed`<sup>Required</sup> <a name="subscribed" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.subscribed"></a>

```typescript
public readonly subscribed: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `taskCompletionStatus`<sup>Required</sup> <a name="taskCompletionStatus" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.taskCompletionStatus"></a>

```typescript
public readonly taskCompletionStatus: DataGitlabProjectIssueTaskCompletionStatusList;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList">DataGitlabProjectIssueTaskCompletionStatusList</a>

---

##### `timeEstimate`<sup>Required</sup> <a name="timeEstimate" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.timeEstimate"></a>

```typescript
public readonly timeEstimate: number;
```

- *Type:* number

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `totalTimeSpent`<sup>Required</sup> <a name="totalTimeSpent" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.totalTimeSpent"></a>

```typescript
public readonly totalTimeSpent: number;
```

- *Type:* number

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `upvotes`<sup>Required</sup> <a name="upvotes" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.upvotes"></a>

```typescript
public readonly upvotes: number;
```

- *Type:* number

---

##### `userNotesCount`<sup>Required</sup> <a name="userNotesCount" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.userNotesCount"></a>

```typescript
public readonly userNotesCount: number;
```

- *Type:* number

---

##### `webUrl`<sup>Required</sup> <a name="webUrl" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.webUrl"></a>

```typescript
public readonly webUrl: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `iidInput`<sup>Optional</sup> <a name="iidInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.iidInput"></a>

```typescript
public readonly iidInput: number;
```

- *Type:* number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `iid`<sup>Required</sup> <a name="iid" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.iid"></a>

```typescript
public readonly iid: number;
```

- *Type:* number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabProjectIssueConfig <a name="DataGitlabProjectIssueConfig" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig.Initializer"></a>

```typescript
import { dataGitlabProjectIssue } from '@cdktf/provider-gitlab'

const dataGitlabProjectIssueConfig: dataGitlabProjectIssue.DataGitlabProjectIssueConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig.property.iid">iid</a></code> | <code>number</code> | The internal ID of the project's issue. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig.property.project">project</a></code> | <code>string</code> | The name or ID of the project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/project_issue#id DataGitlabProjectIssue#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `iid`<sup>Required</sup> <a name="iid" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig.property.iid"></a>

```typescript
public readonly iid: number;
```

- *Type:* number

The internal ID of the project's issue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/project_issue#iid DataGitlabProjectIssue#iid}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The name or ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/project_issue#project DataGitlabProjectIssue#project}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/project_issue#id DataGitlabProjectIssue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGitlabProjectIssueTaskCompletionStatus <a name="DataGitlabProjectIssueTaskCompletionStatus" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatus.Initializer"></a>

```typescript
import { dataGitlabProjectIssue } from '@cdktf/provider-gitlab'

const dataGitlabProjectIssueTaskCompletionStatus: dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatus = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabProjectIssueTaskCompletionStatusList <a name="DataGitlabProjectIssueTaskCompletionStatusList" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.Initializer"></a>

```typescript
import { dataGitlabProjectIssue } from '@cdktf/provider-gitlab'

new dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.get"></a>

```typescript
public get(index: number): DataGitlabProjectIssueTaskCompletionStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGitlabProjectIssueTaskCompletionStatusOutputReference <a name="DataGitlabProjectIssueTaskCompletionStatusOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.Initializer"></a>

```typescript
import { dataGitlabProjectIssue } from '@cdktf/provider-gitlab'

new dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.property.completedCount">completedCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatus">DataGitlabProjectIssueTaskCompletionStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `completedCount`<sup>Required</sup> <a name="completedCount" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.property.completedCount"></a>

```typescript
public readonly completedCount: number;
```

- *Type:* number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGitlabProjectIssueTaskCompletionStatus;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatus">DataGitlabProjectIssueTaskCompletionStatus</a>

---



