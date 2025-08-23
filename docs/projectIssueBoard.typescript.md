# `projectIssueBoard` Submodule <a name="`projectIssueBoard` Submodule" id="@cdktf/provider-gitlab.projectIssueBoard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectIssueBoard <a name="ProjectIssueBoard" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_issue_board gitlab_project_issue_board}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer"></a>

```typescript
import { projectIssueBoard } from '@cdktf/provider-gitlab'

new projectIssueBoard.ProjectIssueBoard(scope: Construct, id: string, config: ProjectIssueBoardConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig">ProjectIssueBoardConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig">ProjectIssueBoardConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.putLists">putLists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetAssigneeId">resetAssigneeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetLists">resetLists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetMilestoneId">resetMilestoneId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLists` <a name="putLists" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.putLists"></a>

```typescript
public putLists(value: IResolvable | ProjectIssueBoardLists[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.putLists.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists">ProjectIssueBoardLists</a>[]

---

##### `resetAssigneeId` <a name="resetAssigneeId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetAssigneeId"></a>

```typescript
public resetAssigneeId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLists` <a name="resetLists" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetLists"></a>

```typescript
public resetLists(): void
```

##### `resetMilestoneId` <a name="resetMilestoneId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetMilestoneId"></a>

```typescript
public resetMilestoneId(): void
```

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetWeight"></a>

```typescript
public resetWeight(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectIssueBoard resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.isConstruct"></a>

```typescript
import { projectIssueBoard } from '@cdktf/provider-gitlab'

projectIssueBoard.ProjectIssueBoard.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.isTerraformElement"></a>

```typescript
import { projectIssueBoard } from '@cdktf/provider-gitlab'

projectIssueBoard.ProjectIssueBoard.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.isTerraformResource"></a>

```typescript
import { projectIssueBoard } from '@cdktf/provider-gitlab'

projectIssueBoard.ProjectIssueBoard.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.generateConfigForImport"></a>

```typescript
import { projectIssueBoard } from '@cdktf/provider-gitlab'

projectIssueBoard.ProjectIssueBoard.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ProjectIssueBoard resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProjectIssueBoard to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProjectIssueBoard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_issue_board#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ProjectIssueBoard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.lists">lists</a></code> | <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList">ProjectIssueBoardListsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.assigneeIdInput">assigneeIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.labelsInput">labelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.listsInput">listsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists">ProjectIssueBoardLists</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.milestoneIdInput">milestoneIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.assigneeId">assigneeId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.labels">labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.milestoneId">milestoneId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.weight">weight</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `lists`<sup>Required</sup> <a name="lists" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.lists"></a>

```typescript
public readonly lists: ProjectIssueBoardListsList;
```

- *Type:* <a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList">ProjectIssueBoardListsList</a>

---

##### `assigneeIdInput`<sup>Optional</sup> <a name="assigneeIdInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.assigneeIdInput"></a>

```typescript
public readonly assigneeIdInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.labelsInput"></a>

```typescript
public readonly labelsInput: string[];
```

- *Type:* string[]

---

##### `listsInput`<sup>Optional</sup> <a name="listsInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.listsInput"></a>

```typescript
public readonly listsInput: IResolvable | ProjectIssueBoardLists[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists">ProjectIssueBoardLists</a>[]

---

##### `milestoneIdInput`<sup>Optional</sup> <a name="milestoneIdInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.milestoneIdInput"></a>

```typescript
public readonly milestoneIdInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `assigneeId`<sup>Required</sup> <a name="assigneeId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.assigneeId"></a>

```typescript
public readonly assigneeId: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

---

##### `milestoneId`<sup>Required</sup> <a name="milestoneId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.milestoneId"></a>

```typescript
public readonly milestoneId: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectIssueBoardConfig <a name="ProjectIssueBoardConfig" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.Initializer"></a>

```typescript
import { projectIssueBoard } from '@cdktf/provider-gitlab'

const projectIssueBoardConfig: projectIssueBoard.ProjectIssueBoardConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.name">name</a></code> | <code>string</code> | The name of the board. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.project">project</a></code> | <code>string</code> | The ID or full path of the project maintained by the authenticated user. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.assigneeId">assigneeId</a></code> | <code>number</code> | The assignee the board should be scoped to. Requires a GitLab EE license. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_issue_board#id ProjectIssueBoard#id}. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.labels">labels</a></code> | <code>string[]</code> | The list of label names which the board should be scoped to. Requires a GitLab EE license. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.lists">lists</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists">ProjectIssueBoardLists</a>[]</code> | lists block. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.milestoneId">milestoneId</a></code> | <code>number</code> | The milestone the board should be scoped to. Requires a GitLab EE license. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.weight">weight</a></code> | <code>number</code> | The weight range from 0 to 9, to which the board should be scoped to. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the board.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_issue_board#name ProjectIssueBoard#name}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID or full path of the project maintained by the authenticated user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_issue_board#project ProjectIssueBoard#project}

---

##### `assigneeId`<sup>Optional</sup> <a name="assigneeId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.assigneeId"></a>

```typescript
public readonly assigneeId: number;
```

- *Type:* number

The assignee the board should be scoped to. Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_issue_board#assignee_id ProjectIssueBoard#assignee_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_issue_board#id ProjectIssueBoard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

The list of label names which the board should be scoped to. Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_issue_board#labels ProjectIssueBoard#labels}

---

##### `lists`<sup>Optional</sup> <a name="lists" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.lists"></a>

```typescript
public readonly lists: IResolvable | ProjectIssueBoardLists[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists">ProjectIssueBoardLists</a>[]

lists block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_issue_board#lists ProjectIssueBoard#lists}

---

##### `milestoneId`<sup>Optional</sup> <a name="milestoneId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.milestoneId"></a>

```typescript
public readonly milestoneId: number;
```

- *Type:* number

The milestone the board should be scoped to. Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_issue_board#milestone_id ProjectIssueBoard#milestone_id}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

The weight range from 0 to 9, to which the board should be scoped to.

Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_issue_board#weight ProjectIssueBoard#weight}

---

### ProjectIssueBoardLists <a name="ProjectIssueBoardLists" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists.Initializer"></a>

```typescript
import { projectIssueBoard } from '@cdktf/provider-gitlab'

const projectIssueBoardLists: projectIssueBoard.ProjectIssueBoardLists = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists.property.assigneeId">assigneeId</a></code> | <code>number</code> | The ID of the assignee the list should be scoped to. Requires a GitLab EE license. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists.property.iterationId">iterationId</a></code> | <code>number</code> | The ID of the iteration the list should be scoped to. Requires a GitLab EE license. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists.property.labelId">labelId</a></code> | <code>number</code> | The ID of the label the list should be scoped to. Requires a GitLab EE license. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists.property.milestoneId">milestoneId</a></code> | <code>number</code> | The ID of the milestone the list should be scoped to. Requires a GitLab EE license. |

---

##### `assigneeId`<sup>Optional</sup> <a name="assigneeId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists.property.assigneeId"></a>

```typescript
public readonly assigneeId: number;
```

- *Type:* number

The ID of the assignee the list should be scoped to. Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_issue_board#assignee_id ProjectIssueBoard#assignee_id}

---

##### `iterationId`<sup>Optional</sup> <a name="iterationId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists.property.iterationId"></a>

```typescript
public readonly iterationId: number;
```

- *Type:* number

The ID of the iteration the list should be scoped to. Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_issue_board#iteration_id ProjectIssueBoard#iteration_id}

---

##### `labelId`<sup>Optional</sup> <a name="labelId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists.property.labelId"></a>

```typescript
public readonly labelId: number;
```

- *Type:* number

The ID of the label the list should be scoped to. Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_issue_board#label_id ProjectIssueBoard#label_id}

---

##### `milestoneId`<sup>Optional</sup> <a name="milestoneId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists.property.milestoneId"></a>

```typescript
public readonly milestoneId: number;
```

- *Type:* number

The ID of the milestone the list should be scoped to. Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_issue_board#milestone_id ProjectIssueBoard#milestone_id}

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectIssueBoardListsList <a name="ProjectIssueBoardListsList" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.Initializer"></a>

```typescript
import { projectIssueBoard } from '@cdktf/provider-gitlab'

new projectIssueBoard.ProjectIssueBoardListsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.get"></a>

```typescript
public get(index: number): ProjectIssueBoardListsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists">ProjectIssueBoardLists</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ProjectIssueBoardLists[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists">ProjectIssueBoardLists</a>[]

---


### ProjectIssueBoardListsOutputReference <a name="ProjectIssueBoardListsOutputReference" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.Initializer"></a>

```typescript
import { projectIssueBoard } from '@cdktf/provider-gitlab'

new projectIssueBoard.ProjectIssueBoardListsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resetAssigneeId">resetAssigneeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resetIterationId">resetIterationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resetLabelId">resetLabelId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resetMilestoneId">resetMilestoneId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAssigneeId` <a name="resetAssigneeId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resetAssigneeId"></a>

```typescript
public resetAssigneeId(): void
```

##### `resetIterationId` <a name="resetIterationId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resetIterationId"></a>

```typescript
public resetIterationId(): void
```

##### `resetLabelId` <a name="resetLabelId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resetLabelId"></a>

```typescript
public resetLabelId(): void
```

##### `resetMilestoneId` <a name="resetMilestoneId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resetMilestoneId"></a>

```typescript
public resetMilestoneId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.position">position</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.assigneeIdInput">assigneeIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.iterationIdInput">iterationIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.labelIdInput">labelIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.milestoneIdInput">milestoneIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.assigneeId">assigneeId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.iterationId">iterationId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.labelId">labelId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.milestoneId">milestoneId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists">ProjectIssueBoardLists</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.position"></a>

```typescript
public readonly position: number;
```

- *Type:* number

---

##### `assigneeIdInput`<sup>Optional</sup> <a name="assigneeIdInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.assigneeIdInput"></a>

```typescript
public readonly assigneeIdInput: number;
```

- *Type:* number

---

##### `iterationIdInput`<sup>Optional</sup> <a name="iterationIdInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.iterationIdInput"></a>

```typescript
public readonly iterationIdInput: number;
```

- *Type:* number

---

##### `labelIdInput`<sup>Optional</sup> <a name="labelIdInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.labelIdInput"></a>

```typescript
public readonly labelIdInput: number;
```

- *Type:* number

---

##### `milestoneIdInput`<sup>Optional</sup> <a name="milestoneIdInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.milestoneIdInput"></a>

```typescript
public readonly milestoneIdInput: number;
```

- *Type:* number

---

##### `assigneeId`<sup>Required</sup> <a name="assigneeId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.assigneeId"></a>

```typescript
public readonly assigneeId: number;
```

- *Type:* number

---

##### `iterationId`<sup>Required</sup> <a name="iterationId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.iterationId"></a>

```typescript
public readonly iterationId: number;
```

- *Type:* number

---

##### `labelId`<sup>Required</sup> <a name="labelId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.labelId"></a>

```typescript
public readonly labelId: number;
```

- *Type:* number

---

##### `milestoneId`<sup>Required</sup> <a name="milestoneId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.milestoneId"></a>

```typescript
public readonly milestoneId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ProjectIssueBoardLists;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists">ProjectIssueBoardLists</a>

---



