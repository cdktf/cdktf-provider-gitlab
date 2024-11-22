# `projectIssue` Submodule <a name="`projectIssue` Submodule" id="@cdktf/provider-gitlab.projectIssue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectIssue <a name="ProjectIssue" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_issue gitlab_project_issue}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer"></a>

```typescript
import { projectIssue } from '@cdktf/provider-gitlab'

new projectIssue.ProjectIssue(scope: Construct, id: string, config: ProjectIssueConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig">ProjectIssueConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig">ProjectIssueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetAssigneeIds">resetAssigneeIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetConfidential">resetConfidential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetCreatedAt">resetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDeleteOnDestroy">resetDeleteOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDiscussionLocked">resetDiscussionLocked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDiscussionToResolve">resetDiscussionToResolve</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDueDate">resetDueDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetEpicIssueId">resetEpicIssueId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetIid">resetIid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetIssueType">resetIssueType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetMergeRequestToResolveDiscussionsOf">resetMergeRequestToResolveDiscussionsOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetMilestoneId">resetMilestoneId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetUpdatedAt">resetUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAssigneeIds` <a name="resetAssigneeIds" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetAssigneeIds"></a>

```typescript
public resetAssigneeIds(): void
```

##### `resetConfidential` <a name="resetConfidential" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetConfidential"></a>

```typescript
public resetConfidential(): void
```

##### `resetCreatedAt` <a name="resetCreatedAt" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetCreatedAt"></a>

```typescript
public resetCreatedAt(): void
```

##### `resetDeleteOnDestroy` <a name="resetDeleteOnDestroy" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDeleteOnDestroy"></a>

```typescript
public resetDeleteOnDestroy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDiscussionLocked` <a name="resetDiscussionLocked" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDiscussionLocked"></a>

```typescript
public resetDiscussionLocked(): void
```

##### `resetDiscussionToResolve` <a name="resetDiscussionToResolve" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDiscussionToResolve"></a>

```typescript
public resetDiscussionToResolve(): void
```

##### `resetDueDate` <a name="resetDueDate" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDueDate"></a>

```typescript
public resetDueDate(): void
```

##### `resetEpicIssueId` <a name="resetEpicIssueId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetEpicIssueId"></a>

```typescript
public resetEpicIssueId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIid` <a name="resetIid" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetIid"></a>

```typescript
public resetIid(): void
```

##### `resetIssueType` <a name="resetIssueType" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetIssueType"></a>

```typescript
public resetIssueType(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMergeRequestToResolveDiscussionsOf` <a name="resetMergeRequestToResolveDiscussionsOf" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetMergeRequestToResolveDiscussionsOf"></a>

```typescript
public resetMergeRequestToResolveDiscussionsOf(): void
```

##### `resetMilestoneId` <a name="resetMilestoneId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetMilestoneId"></a>

```typescript
public resetMilestoneId(): void
```

##### `resetState` <a name="resetState" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetState"></a>

```typescript
public resetState(): void
```

##### `resetUpdatedAt` <a name="resetUpdatedAt" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetUpdatedAt"></a>

```typescript
public resetUpdatedAt(): void
```

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetWeight"></a>

```typescript
public resetWeight(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectIssue resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.isConstruct"></a>

```typescript
import { projectIssue } from '@cdktf/provider-gitlab'

projectIssue.ProjectIssue.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.isTerraformElement"></a>

```typescript
import { projectIssue } from '@cdktf/provider-gitlab'

projectIssue.ProjectIssue.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.isTerraformResource"></a>

```typescript
import { projectIssue } from '@cdktf/provider-gitlab'

projectIssue.ProjectIssue.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.generateConfigForImport"></a>

```typescript
import { projectIssue } from '@cdktf/provider-gitlab'

projectIssue.ProjectIssue.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ProjectIssue resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProjectIssue to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProjectIssue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_issue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ProjectIssue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.authorId">authorId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.closedAt">closedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.closedByUserId">closedByUserId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.downvotes">downvotes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.epicId">epicId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.humanTimeEstimate">humanTimeEstimate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.humanTotalTimeSpent">humanTotalTimeSpent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.issueId">issueId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.issueLinkId">issueLinkId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.links">links</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.mergeRequestsCount">mergeRequestsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.movedToId">movedToId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.references">references</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.subscribed">subscribed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.taskCompletionStatus">taskCompletionStatus</a></code> | <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList">ProjectIssueTaskCompletionStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.timeEstimate">timeEstimate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.totalTimeSpent">totalTimeSpent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.upvotes">upvotes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.userNotesCount">userNotesCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.webUrl">webUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.assigneeIdsInput">assigneeIdsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.confidentialInput">confidentialInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.createdAtInput">createdAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.deleteOnDestroyInput">deleteOnDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.discussionLockedInput">discussionLockedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.discussionToResolveInput">discussionToResolveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.dueDateInput">dueDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.epicIssueIdInput">epicIssueIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.iidInput">iidInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.issueTypeInput">issueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.labelsInput">labelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.mergeRequestToResolveDiscussionsOfInput">mergeRequestToResolveDiscussionsOfInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.milestoneIdInput">milestoneIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.updatedAtInput">updatedAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.assigneeIds">assigneeIds</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.confidential">confidential</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.deleteOnDestroy">deleteOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.discussionLocked">discussionLocked</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.discussionToResolve">discussionToResolve</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.dueDate">dueDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.epicIssueId">epicIssueId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.iid">iid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.issueType">issueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.labels">labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.mergeRequestToResolveDiscussionsOf">mergeRequestToResolveDiscussionsOf</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.milestoneId">milestoneId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.weight">weight</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authorId`<sup>Required</sup> <a name="authorId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.authorId"></a>

```typescript
public readonly authorId: number;
```

- *Type:* number

---

##### `closedAt`<sup>Required</sup> <a name="closedAt" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.closedAt"></a>

```typescript
public readonly closedAt: string;
```

- *Type:* string

---

##### `closedByUserId`<sup>Required</sup> <a name="closedByUserId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.closedByUserId"></a>

```typescript
public readonly closedByUserId: number;
```

- *Type:* number

---

##### `downvotes`<sup>Required</sup> <a name="downvotes" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.downvotes"></a>

```typescript
public readonly downvotes: number;
```

- *Type:* number

---

##### `epicId`<sup>Required</sup> <a name="epicId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.epicId"></a>

```typescript
public readonly epicId: number;
```

- *Type:* number

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `humanTimeEstimate`<sup>Required</sup> <a name="humanTimeEstimate" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.humanTimeEstimate"></a>

```typescript
public readonly humanTimeEstimate: string;
```

- *Type:* string

---

##### `humanTotalTimeSpent`<sup>Required</sup> <a name="humanTotalTimeSpent" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.humanTotalTimeSpent"></a>

```typescript
public readonly humanTotalTimeSpent: string;
```

- *Type:* string

---

##### `issueId`<sup>Required</sup> <a name="issueId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.issueId"></a>

```typescript
public readonly issueId: number;
```

- *Type:* number

---

##### `issueLinkId`<sup>Required</sup> <a name="issueLinkId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.issueLinkId"></a>

```typescript
public readonly issueLinkId: number;
```

- *Type:* number

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.links"></a>

```typescript
public readonly links: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `mergeRequestsCount`<sup>Required</sup> <a name="mergeRequestsCount" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.mergeRequestsCount"></a>

```typescript
public readonly mergeRequestsCount: number;
```

- *Type:* number

---

##### `movedToId`<sup>Required</sup> <a name="movedToId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.movedToId"></a>

```typescript
public readonly movedToId: number;
```

- *Type:* number

---

##### `references`<sup>Required</sup> <a name="references" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.references"></a>

```typescript
public readonly references: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `subscribed`<sup>Required</sup> <a name="subscribed" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.subscribed"></a>

```typescript
public readonly subscribed: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `taskCompletionStatus`<sup>Required</sup> <a name="taskCompletionStatus" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.taskCompletionStatus"></a>

```typescript
public readonly taskCompletionStatus: ProjectIssueTaskCompletionStatusList;
```

- *Type:* <a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList">ProjectIssueTaskCompletionStatusList</a>

---

##### `timeEstimate`<sup>Required</sup> <a name="timeEstimate" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.timeEstimate"></a>

```typescript
public readonly timeEstimate: number;
```

- *Type:* number

---

##### `totalTimeSpent`<sup>Required</sup> <a name="totalTimeSpent" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.totalTimeSpent"></a>

```typescript
public readonly totalTimeSpent: number;
```

- *Type:* number

---

##### `upvotes`<sup>Required</sup> <a name="upvotes" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.upvotes"></a>

```typescript
public readonly upvotes: number;
```

- *Type:* number

---

##### `userNotesCount`<sup>Required</sup> <a name="userNotesCount" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.userNotesCount"></a>

```typescript
public readonly userNotesCount: number;
```

- *Type:* number

---

##### `webUrl`<sup>Required</sup> <a name="webUrl" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.webUrl"></a>

```typescript
public readonly webUrl: string;
```

- *Type:* string

---

##### `assigneeIdsInput`<sup>Optional</sup> <a name="assigneeIdsInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.assigneeIdsInput"></a>

```typescript
public readonly assigneeIdsInput: number[];
```

- *Type:* number[]

---

##### `confidentialInput`<sup>Optional</sup> <a name="confidentialInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.confidentialInput"></a>

```typescript
public readonly confidentialInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `createdAtInput`<sup>Optional</sup> <a name="createdAtInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.createdAtInput"></a>

```typescript
public readonly createdAtInput: string;
```

- *Type:* string

---

##### `deleteOnDestroyInput`<sup>Optional</sup> <a name="deleteOnDestroyInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.deleteOnDestroyInput"></a>

```typescript
public readonly deleteOnDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `discussionLockedInput`<sup>Optional</sup> <a name="discussionLockedInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.discussionLockedInput"></a>

```typescript
public readonly discussionLockedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `discussionToResolveInput`<sup>Optional</sup> <a name="discussionToResolveInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.discussionToResolveInput"></a>

```typescript
public readonly discussionToResolveInput: string;
```

- *Type:* string

---

##### `dueDateInput`<sup>Optional</sup> <a name="dueDateInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.dueDateInput"></a>

```typescript
public readonly dueDateInput: string;
```

- *Type:* string

---

##### `epicIssueIdInput`<sup>Optional</sup> <a name="epicIssueIdInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.epicIssueIdInput"></a>

```typescript
public readonly epicIssueIdInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `iidInput`<sup>Optional</sup> <a name="iidInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.iidInput"></a>

```typescript
public readonly iidInput: number;
```

- *Type:* number

---

##### `issueTypeInput`<sup>Optional</sup> <a name="issueTypeInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.issueTypeInput"></a>

```typescript
public readonly issueTypeInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.labelsInput"></a>

```typescript
public readonly labelsInput: string[];
```

- *Type:* string[]

---

##### `mergeRequestToResolveDiscussionsOfInput`<sup>Optional</sup> <a name="mergeRequestToResolveDiscussionsOfInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.mergeRequestToResolveDiscussionsOfInput"></a>

```typescript
public readonly mergeRequestToResolveDiscussionsOfInput: number;
```

- *Type:* number

---

##### `milestoneIdInput`<sup>Optional</sup> <a name="milestoneIdInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.milestoneIdInput"></a>

```typescript
public readonly milestoneIdInput: number;
```

- *Type:* number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `updatedAtInput`<sup>Optional</sup> <a name="updatedAtInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.updatedAtInput"></a>

```typescript
public readonly updatedAtInput: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `assigneeIds`<sup>Required</sup> <a name="assigneeIds" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.assigneeIds"></a>

```typescript
public readonly assigneeIds: number[];
```

- *Type:* number[]

---

##### `confidential`<sup>Required</sup> <a name="confidential" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.confidential"></a>

```typescript
public readonly confidential: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `deleteOnDestroy`<sup>Required</sup> <a name="deleteOnDestroy" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.deleteOnDestroy"></a>

```typescript
public readonly deleteOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `discussionLocked`<sup>Required</sup> <a name="discussionLocked" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.discussionLocked"></a>

```typescript
public readonly discussionLocked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `discussionToResolve`<sup>Required</sup> <a name="discussionToResolve" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.discussionToResolve"></a>

```typescript
public readonly discussionToResolve: string;
```

- *Type:* string

---

##### `dueDate`<sup>Required</sup> <a name="dueDate" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.dueDate"></a>

```typescript
public readonly dueDate: string;
```

- *Type:* string

---

##### `epicIssueId`<sup>Required</sup> <a name="epicIssueId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.epicIssueId"></a>

```typescript
public readonly epicIssueId: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `iid`<sup>Required</sup> <a name="iid" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.iid"></a>

```typescript
public readonly iid: number;
```

- *Type:* number

---

##### `issueType`<sup>Required</sup> <a name="issueType" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.issueType"></a>

```typescript
public readonly issueType: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

---

##### `mergeRequestToResolveDiscussionsOf`<sup>Required</sup> <a name="mergeRequestToResolveDiscussionsOf" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.mergeRequestToResolveDiscussionsOf"></a>

```typescript
public readonly mergeRequestToResolveDiscussionsOf: number;
```

- *Type:* number

---

##### `milestoneId`<sup>Required</sup> <a name="milestoneId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.milestoneId"></a>

```typescript
public readonly milestoneId: number;
```

- *Type:* number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectIssueConfig <a name="ProjectIssueConfig" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.Initializer"></a>

```typescript
import { projectIssue } from '@cdktf/provider-gitlab'

const projectIssueConfig: projectIssue.ProjectIssueConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.project">project</a></code> | <code>string</code> | The name or ID of the project. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.title">title</a></code> | <code>string</code> | The title of the issue. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.assigneeIds">assigneeIds</a></code> | <code>number[]</code> | The IDs of the users to assign the issue to. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.confidential">confidential</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set an issue to be confidential. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.createdAt">createdAt</a></code> | <code>string</code> | When the issue was created. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.deleteOnDestroy">deleteOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the issue is deleted instead of closed during destroy. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.description">description</a></code> | <code>string</code> | The description of an issue. Limited to 1,048,576 characters. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.discussionLocked">discussionLocked</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the issue is locked for discussions or not. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.discussionToResolve">discussionToResolve</a></code> | <code>string</code> | The ID of a discussion to resolve. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.dueDate">dueDate</a></code> | <code>string</code> | The due date. Date time string in the format YYYY-MM-DD, for example 2016-03-11. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.epicIssueId">epicIssueId</a></code> | <code>number</code> | The ID of the epic issue. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_issue#id ProjectIssue#id}. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.iid">iid</a></code> | <code>number</code> | The internal ID of the project's issue. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.issueType">issueType</a></code> | <code>string</code> | The type of issue. Valid values are: `issue`, `incident`, `test_case`. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.labels">labels</a></code> | <code>string[]</code> | The labels of an issue. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.mergeRequestToResolveDiscussionsOf">mergeRequestToResolveDiscussionsOf</a></code> | <code>number</code> | The IID of a merge request in which to resolve all issues. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.milestoneId">milestoneId</a></code> | <code>number</code> | The global ID of a milestone to assign issue. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.state">state</a></code> | <code>string</code> | The state of the issue. Valid values are: `opened`, `closed`. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.updatedAt">updatedAt</a></code> | <code>string</code> | When the issue was updated. Date time string, ISO 8601 formatted, for example 2016-03-11T03:45:40Z. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.weight">weight</a></code> | <code>number</code> | The weight of the issue. Valid values are greater than or equal to 0. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The name or ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_issue#project ProjectIssue#project}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

The title of the issue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_issue#title ProjectIssue#title}

---

##### `assigneeIds`<sup>Optional</sup> <a name="assigneeIds" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.assigneeIds"></a>

```typescript
public readonly assigneeIds: number[];
```

- *Type:* number[]

The IDs of the users to assign the issue to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_issue#assignee_ids ProjectIssue#assignee_ids}

---

##### `confidential`<sup>Optional</sup> <a name="confidential" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.confidential"></a>

```typescript
public readonly confidential: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set an issue to be confidential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_issue#confidential ProjectIssue#confidential}

---

##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

When the issue was created.

Date time string, ISO 8601 formatted, for example 2016-03-11T03:45:40Z. Requires administrator or project/group owner rights.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_issue#created_at ProjectIssue#created_at}

---

##### `deleteOnDestroy`<sup>Optional</sup> <a name="deleteOnDestroy" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.deleteOnDestroy"></a>

```typescript
public readonly deleteOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the issue is deleted instead of closed during destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_issue#delete_on_destroy ProjectIssue#delete_on_destroy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of an issue. Limited to 1,048,576 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_issue#description ProjectIssue#description}

---

##### `discussionLocked`<sup>Optional</sup> <a name="discussionLocked" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.discussionLocked"></a>

```typescript
public readonly discussionLocked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the issue is locked for discussions or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_issue#discussion_locked ProjectIssue#discussion_locked}

---

##### `discussionToResolve`<sup>Optional</sup> <a name="discussionToResolve" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.discussionToResolve"></a>

```typescript
public readonly discussionToResolve: string;
```

- *Type:* string

The ID of a discussion to resolve.

This fills out the issue with a default description and mark the discussion as resolved. Use in combination with merge_request_to_resolve_discussions_of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_issue#discussion_to_resolve ProjectIssue#discussion_to_resolve}

---

##### `dueDate`<sup>Optional</sup> <a name="dueDate" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.dueDate"></a>

```typescript
public readonly dueDate: string;
```

- *Type:* string

The due date. Date time string in the format YYYY-MM-DD, for example 2016-03-11.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_issue#due_date ProjectIssue#due_date}

---

##### `epicIssueId`<sup>Optional</sup> <a name="epicIssueId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.epicIssueId"></a>

```typescript
public readonly epicIssueId: number;
```

- *Type:* number

The ID of the epic issue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_issue#epic_issue_id ProjectIssue#epic_issue_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_issue#id ProjectIssue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `iid`<sup>Optional</sup> <a name="iid" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.iid"></a>

```typescript
public readonly iid: number;
```

- *Type:* number

The internal ID of the project's issue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_issue#iid ProjectIssue#iid}

---

##### `issueType`<sup>Optional</sup> <a name="issueType" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.issueType"></a>

```typescript
public readonly issueType: string;
```

- *Type:* string

The type of issue. Valid values are: `issue`, `incident`, `test_case`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_issue#issue_type ProjectIssue#issue_type}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

The labels of an issue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_issue#labels ProjectIssue#labels}

---

##### `mergeRequestToResolveDiscussionsOf`<sup>Optional</sup> <a name="mergeRequestToResolveDiscussionsOf" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.mergeRequestToResolveDiscussionsOf"></a>

```typescript
public readonly mergeRequestToResolveDiscussionsOf: number;
```

- *Type:* number

The IID of a merge request in which to resolve all issues.

This fills out the issue with a default description and mark all discussions as resolved. When passing a description or title, these values take precedence over the default values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_issue#merge_request_to_resolve_discussions_of ProjectIssue#merge_request_to_resolve_discussions_of}

---

##### `milestoneId`<sup>Optional</sup> <a name="milestoneId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.milestoneId"></a>

```typescript
public readonly milestoneId: number;
```

- *Type:* number

The global ID of a milestone to assign issue.

To find the milestone_id associated with a milestone, view an issue with the milestone assigned and use the API to retrieve the issue's details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_issue#milestone_id ProjectIssue#milestone_id}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

The state of the issue. Valid values are: `opened`, `closed`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_issue#state ProjectIssue#state}

---

##### `updatedAt`<sup>Optional</sup> <a name="updatedAt" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

When the issue was updated. Date time string, ISO 8601 formatted, for example 2016-03-11T03:45:40Z.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_issue#updated_at ProjectIssue#updated_at}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

The weight of the issue. Valid values are greater than or equal to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_issue#weight ProjectIssue#weight}

---

### ProjectIssueTaskCompletionStatus <a name="ProjectIssueTaskCompletionStatus" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatus.Initializer"></a>

```typescript
import { projectIssue } from '@cdktf/provider-gitlab'

const projectIssueTaskCompletionStatus: projectIssue.ProjectIssueTaskCompletionStatus = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### ProjectIssueTaskCompletionStatusList <a name="ProjectIssueTaskCompletionStatusList" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.Initializer"></a>

```typescript
import { projectIssue } from '@cdktf/provider-gitlab'

new projectIssue.ProjectIssueTaskCompletionStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.get"></a>

```typescript
public get(index: number): ProjectIssueTaskCompletionStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ProjectIssueTaskCompletionStatusOutputReference <a name="ProjectIssueTaskCompletionStatusOutputReference" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.Initializer"></a>

```typescript
import { projectIssue } from '@cdktf/provider-gitlab'

new projectIssue.ProjectIssueTaskCompletionStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.completedCount">completedCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatus">ProjectIssueTaskCompletionStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `completedCount`<sup>Required</sup> <a name="completedCount" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.completedCount"></a>

```typescript
public readonly completedCount: number;
```

- *Type:* number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ProjectIssueTaskCompletionStatus;
```

- *Type:* <a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatus">ProjectIssueTaskCompletionStatus</a>

---



