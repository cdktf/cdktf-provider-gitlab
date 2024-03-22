# `projectLevelNotifications` Submodule <a name="`projectLevelNotifications` Submodule" id="@cdktf/provider-gitlab.projectLevelNotifications"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectLevelNotifications <a name="ProjectLevelNotifications" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/project_level_notifications gitlab_project_level_notifications}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer"></a>

```typescript
import { projectLevelNotifications } from '@cdktf/provider-gitlab'

new projectLevelNotifications.ProjectLevelNotifications(scope: Construct, id: string, config: ProjectLevelNotificationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig">ProjectLevelNotificationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig">ProjectLevelNotificationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetCloseIssue">resetCloseIssue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetCloseMergeRequest">resetCloseMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetFailedPipeline">resetFailedPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetFixedPipeline">resetFixedPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetIssueDue">resetIssueDue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetLevel">resetLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetMergeMergeRequest">resetMergeMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetMergeWhenPipelineSucceeds">resetMergeWhenPipelineSucceeds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetMovedProject">resetMovedProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetNewIssue">resetNewIssue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetNewMergeRequest">resetNewMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetNewNote">resetNewNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetPushToMergeRequest">resetPushToMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetReassignIssue">resetReassignIssue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetReassignMergeRequest">resetReassignMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetReopenIssue">resetReopenIssue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetReopenMergeRequest">resetReopenMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetSuccessPipeline">resetSuccessPipeline</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCloseIssue` <a name="resetCloseIssue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetCloseIssue"></a>

```typescript
public resetCloseIssue(): void
```

##### `resetCloseMergeRequest` <a name="resetCloseMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetCloseMergeRequest"></a>

```typescript
public resetCloseMergeRequest(): void
```

##### `resetFailedPipeline` <a name="resetFailedPipeline" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetFailedPipeline"></a>

```typescript
public resetFailedPipeline(): void
```

##### `resetFixedPipeline` <a name="resetFixedPipeline" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetFixedPipeline"></a>

```typescript
public resetFixedPipeline(): void
```

##### `resetIssueDue` <a name="resetIssueDue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetIssueDue"></a>

```typescript
public resetIssueDue(): void
```

##### `resetLevel` <a name="resetLevel" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetLevel"></a>

```typescript
public resetLevel(): void
```

##### `resetMergeMergeRequest` <a name="resetMergeMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetMergeMergeRequest"></a>

```typescript
public resetMergeMergeRequest(): void
```

##### `resetMergeWhenPipelineSucceeds` <a name="resetMergeWhenPipelineSucceeds" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetMergeWhenPipelineSucceeds"></a>

```typescript
public resetMergeWhenPipelineSucceeds(): void
```

##### `resetMovedProject` <a name="resetMovedProject" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetMovedProject"></a>

```typescript
public resetMovedProject(): void
```

##### `resetNewIssue` <a name="resetNewIssue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetNewIssue"></a>

```typescript
public resetNewIssue(): void
```

##### `resetNewMergeRequest` <a name="resetNewMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetNewMergeRequest"></a>

```typescript
public resetNewMergeRequest(): void
```

##### `resetNewNote` <a name="resetNewNote" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetNewNote"></a>

```typescript
public resetNewNote(): void
```

##### `resetPushToMergeRequest` <a name="resetPushToMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetPushToMergeRequest"></a>

```typescript
public resetPushToMergeRequest(): void
```

##### `resetReassignIssue` <a name="resetReassignIssue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetReassignIssue"></a>

```typescript
public resetReassignIssue(): void
```

##### `resetReassignMergeRequest` <a name="resetReassignMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetReassignMergeRequest"></a>

```typescript
public resetReassignMergeRequest(): void
```

##### `resetReopenIssue` <a name="resetReopenIssue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetReopenIssue"></a>

```typescript
public resetReopenIssue(): void
```

##### `resetReopenMergeRequest` <a name="resetReopenMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetReopenMergeRequest"></a>

```typescript
public resetReopenMergeRequest(): void
```

##### `resetSuccessPipeline` <a name="resetSuccessPipeline" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetSuccessPipeline"></a>

```typescript
public resetSuccessPipeline(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectLevelNotifications resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.isConstruct"></a>

```typescript
import { projectLevelNotifications } from '@cdktf/provider-gitlab'

projectLevelNotifications.ProjectLevelNotifications.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.isTerraformElement"></a>

```typescript
import { projectLevelNotifications } from '@cdktf/provider-gitlab'

projectLevelNotifications.ProjectLevelNotifications.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.isTerraformResource"></a>

```typescript
import { projectLevelNotifications } from '@cdktf/provider-gitlab'

projectLevelNotifications.ProjectLevelNotifications.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.generateConfigForImport"></a>

```typescript
import { projectLevelNotifications } from '@cdktf/provider-gitlab'

projectLevelNotifications.ProjectLevelNotifications.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ProjectLevelNotifications resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProjectLevelNotifications to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProjectLevelNotifications that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/project_level_notifications#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ProjectLevelNotifications to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.closeIssueInput">closeIssueInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.closeMergeRequestInput">closeMergeRequestInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.failedPipelineInput">failedPipelineInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.fixedPipelineInput">fixedPipelineInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.issueDueInput">issueDueInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.levelInput">levelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.mergeMergeRequestInput">mergeMergeRequestInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.mergeWhenPipelineSucceedsInput">mergeWhenPipelineSucceedsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.movedProjectInput">movedProjectInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newIssueInput">newIssueInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newMergeRequestInput">newMergeRequestInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newNoteInput">newNoteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.pushToMergeRequestInput">pushToMergeRequestInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reassignIssueInput">reassignIssueInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reassignMergeRequestInput">reassignMergeRequestInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reopenIssueInput">reopenIssueInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reopenMergeRequestInput">reopenMergeRequestInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.successPipelineInput">successPipelineInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.closeIssue">closeIssue</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.closeMergeRequest">closeMergeRequest</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.failedPipeline">failedPipeline</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.fixedPipeline">fixedPipeline</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.issueDue">issueDue</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.mergeMergeRequest">mergeMergeRequest</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.mergeWhenPipelineSucceeds">mergeWhenPipelineSucceeds</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.movedProject">movedProject</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newIssue">newIssue</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newMergeRequest">newMergeRequest</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newNote">newNote</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.pushToMergeRequest">pushToMergeRequest</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reassignIssue">reassignIssue</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reassignMergeRequest">reassignMergeRequest</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reopenIssue">reopenIssue</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reopenMergeRequest">reopenMergeRequest</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.successPipeline">successPipeline</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `closeIssueInput`<sup>Optional</sup> <a name="closeIssueInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.closeIssueInput"></a>

```typescript
public readonly closeIssueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `closeMergeRequestInput`<sup>Optional</sup> <a name="closeMergeRequestInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.closeMergeRequestInput"></a>

```typescript
public readonly closeMergeRequestInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `failedPipelineInput`<sup>Optional</sup> <a name="failedPipelineInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.failedPipelineInput"></a>

```typescript
public readonly failedPipelineInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fixedPipelineInput`<sup>Optional</sup> <a name="fixedPipelineInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.fixedPipelineInput"></a>

```typescript
public readonly fixedPipelineInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `issueDueInput`<sup>Optional</sup> <a name="issueDueInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.issueDueInput"></a>

```typescript
public readonly issueDueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `levelInput`<sup>Optional</sup> <a name="levelInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.levelInput"></a>

```typescript
public readonly levelInput: string;
```

- *Type:* string

---

##### `mergeMergeRequestInput`<sup>Optional</sup> <a name="mergeMergeRequestInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.mergeMergeRequestInput"></a>

```typescript
public readonly mergeMergeRequestInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mergeWhenPipelineSucceedsInput`<sup>Optional</sup> <a name="mergeWhenPipelineSucceedsInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.mergeWhenPipelineSucceedsInput"></a>

```typescript
public readonly mergeWhenPipelineSucceedsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `movedProjectInput`<sup>Optional</sup> <a name="movedProjectInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.movedProjectInput"></a>

```typescript
public readonly movedProjectInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `newIssueInput`<sup>Optional</sup> <a name="newIssueInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newIssueInput"></a>

```typescript
public readonly newIssueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `newMergeRequestInput`<sup>Optional</sup> <a name="newMergeRequestInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newMergeRequestInput"></a>

```typescript
public readonly newMergeRequestInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `newNoteInput`<sup>Optional</sup> <a name="newNoteInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newNoteInput"></a>

```typescript
public readonly newNoteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `pushToMergeRequestInput`<sup>Optional</sup> <a name="pushToMergeRequestInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.pushToMergeRequestInput"></a>

```typescript
public readonly pushToMergeRequestInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `reassignIssueInput`<sup>Optional</sup> <a name="reassignIssueInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reassignIssueInput"></a>

```typescript
public readonly reassignIssueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `reassignMergeRequestInput`<sup>Optional</sup> <a name="reassignMergeRequestInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reassignMergeRequestInput"></a>

```typescript
public readonly reassignMergeRequestInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `reopenIssueInput`<sup>Optional</sup> <a name="reopenIssueInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reopenIssueInput"></a>

```typescript
public readonly reopenIssueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `reopenMergeRequestInput`<sup>Optional</sup> <a name="reopenMergeRequestInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reopenMergeRequestInput"></a>

```typescript
public readonly reopenMergeRequestInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `successPipelineInput`<sup>Optional</sup> <a name="successPipelineInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.successPipelineInput"></a>

```typescript
public readonly successPipelineInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `closeIssue`<sup>Required</sup> <a name="closeIssue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.closeIssue"></a>

```typescript
public readonly closeIssue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `closeMergeRequest`<sup>Required</sup> <a name="closeMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.closeMergeRequest"></a>

```typescript
public readonly closeMergeRequest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `failedPipeline`<sup>Required</sup> <a name="failedPipeline" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.failedPipeline"></a>

```typescript
public readonly failedPipeline: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fixedPipeline`<sup>Required</sup> <a name="fixedPipeline" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.fixedPipeline"></a>

```typescript
public readonly fixedPipeline: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `issueDue`<sup>Required</sup> <a name="issueDue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.issueDue"></a>

```typescript
public readonly issueDue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `mergeMergeRequest`<sup>Required</sup> <a name="mergeMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.mergeMergeRequest"></a>

```typescript
public readonly mergeMergeRequest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mergeWhenPipelineSucceeds`<sup>Required</sup> <a name="mergeWhenPipelineSucceeds" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.mergeWhenPipelineSucceeds"></a>

```typescript
public readonly mergeWhenPipelineSucceeds: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `movedProject`<sup>Required</sup> <a name="movedProject" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.movedProject"></a>

```typescript
public readonly movedProject: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `newIssue`<sup>Required</sup> <a name="newIssue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newIssue"></a>

```typescript
public readonly newIssue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `newMergeRequest`<sup>Required</sup> <a name="newMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newMergeRequest"></a>

```typescript
public readonly newMergeRequest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `newNote`<sup>Required</sup> <a name="newNote" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newNote"></a>

```typescript
public readonly newNote: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `pushToMergeRequest`<sup>Required</sup> <a name="pushToMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.pushToMergeRequest"></a>

```typescript
public readonly pushToMergeRequest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `reassignIssue`<sup>Required</sup> <a name="reassignIssue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reassignIssue"></a>

```typescript
public readonly reassignIssue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `reassignMergeRequest`<sup>Required</sup> <a name="reassignMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reassignMergeRequest"></a>

```typescript
public readonly reassignMergeRequest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `reopenIssue`<sup>Required</sup> <a name="reopenIssue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reopenIssue"></a>

```typescript
public readonly reopenIssue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `reopenMergeRequest`<sup>Required</sup> <a name="reopenMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reopenMergeRequest"></a>

```typescript
public readonly reopenMergeRequest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `successPipeline`<sup>Required</sup> <a name="successPipeline" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.successPipeline"></a>

```typescript
public readonly successPipeline: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectLevelNotificationsConfig <a name="ProjectLevelNotificationsConfig" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.Initializer"></a>

```typescript
import { projectLevelNotifications } from '@cdktf/provider-gitlab'

const projectLevelNotificationsConfig: projectLevelNotifications.ProjectLevelNotificationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.project">project</a></code> | <code>string</code> | The ID or URL-encoded path of a project where notifications will be configured. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.closeIssue">closeIssue</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for closed issues. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.closeMergeRequest">closeMergeRequest</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for closed merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.failedPipeline">failedPipeline</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for failed pipelines. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.fixedPipeline">fixedPipeline</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for fixed pipelines. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.issueDue">issueDue</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for due issues. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.level">level</a></code> | <code>string</code> | The level of the notification. Valid values are: `disabled`, `participating`, `watch`, `global`, `mention`, `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.mergeMergeRequest">mergeMergeRequest</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for merged merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.mergeWhenPipelineSucceeds">mergeWhenPipelineSucceeds</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for merged merge requests when the pipeline succeeds. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.movedProject">movedProject</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for moved projects. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.newIssue">newIssue</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for new issues. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.newMergeRequest">newMergeRequest</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for new merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.newNote">newNote</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for new notes on merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.pushToMergeRequest">pushToMergeRequest</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for push to merge request branches. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.reassignIssue">reassignIssue</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for issue reassignments. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.reassignMergeRequest">reassignMergeRequest</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for merge request reassignments. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.reopenIssue">reopenIssue</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for reopened issues. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.reopenMergeRequest">reopenMergeRequest</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for reopened merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.successPipeline">successPipeline</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for successful pipelines. Can only be used when `level` is `custom`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID or URL-encoded path of a project where notifications will be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/project_level_notifications#project ProjectLevelNotifications#project}

---

##### `closeIssue`<sup>Optional</sup> <a name="closeIssue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.closeIssue"></a>

```typescript
public readonly closeIssue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for closed issues. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/project_level_notifications#close_issue ProjectLevelNotifications#close_issue}

---

##### `closeMergeRequest`<sup>Optional</sup> <a name="closeMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.closeMergeRequest"></a>

```typescript
public readonly closeMergeRequest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for closed merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/project_level_notifications#close_merge_request ProjectLevelNotifications#close_merge_request}

---

##### `failedPipeline`<sup>Optional</sup> <a name="failedPipeline" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.failedPipeline"></a>

```typescript
public readonly failedPipeline: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for failed pipelines. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/project_level_notifications#failed_pipeline ProjectLevelNotifications#failed_pipeline}

---

##### `fixedPipeline`<sup>Optional</sup> <a name="fixedPipeline" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.fixedPipeline"></a>

```typescript
public readonly fixedPipeline: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for fixed pipelines. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/project_level_notifications#fixed_pipeline ProjectLevelNotifications#fixed_pipeline}

---

##### `issueDue`<sup>Optional</sup> <a name="issueDue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.issueDue"></a>

```typescript
public readonly issueDue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for due issues. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/project_level_notifications#issue_due ProjectLevelNotifications#issue_due}

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

The level of the notification. Valid values are: `disabled`, `participating`, `watch`, `global`, `mention`, `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/project_level_notifications#level ProjectLevelNotifications#level}

---

##### `mergeMergeRequest`<sup>Optional</sup> <a name="mergeMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.mergeMergeRequest"></a>

```typescript
public readonly mergeMergeRequest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for merged merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/project_level_notifications#merge_merge_request ProjectLevelNotifications#merge_merge_request}

---

##### `mergeWhenPipelineSucceeds`<sup>Optional</sup> <a name="mergeWhenPipelineSucceeds" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.mergeWhenPipelineSucceeds"></a>

```typescript
public readonly mergeWhenPipelineSucceeds: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for merged merge requests when the pipeline succeeds. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/project_level_notifications#merge_when_pipeline_succeeds ProjectLevelNotifications#merge_when_pipeline_succeeds}

---

##### `movedProject`<sup>Optional</sup> <a name="movedProject" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.movedProject"></a>

```typescript
public readonly movedProject: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for moved projects. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/project_level_notifications#moved_project ProjectLevelNotifications#moved_project}

---

##### `newIssue`<sup>Optional</sup> <a name="newIssue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.newIssue"></a>

```typescript
public readonly newIssue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for new issues. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/project_level_notifications#new_issue ProjectLevelNotifications#new_issue}

---

##### `newMergeRequest`<sup>Optional</sup> <a name="newMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.newMergeRequest"></a>

```typescript
public readonly newMergeRequest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for new merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/project_level_notifications#new_merge_request ProjectLevelNotifications#new_merge_request}

---

##### `newNote`<sup>Optional</sup> <a name="newNote" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.newNote"></a>

```typescript
public readonly newNote: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for new notes on merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/project_level_notifications#new_note ProjectLevelNotifications#new_note}

---

##### `pushToMergeRequest`<sup>Optional</sup> <a name="pushToMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.pushToMergeRequest"></a>

```typescript
public readonly pushToMergeRequest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for push to merge request branches. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/project_level_notifications#push_to_merge_request ProjectLevelNotifications#push_to_merge_request}

---

##### `reassignIssue`<sup>Optional</sup> <a name="reassignIssue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.reassignIssue"></a>

```typescript
public readonly reassignIssue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for issue reassignments. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/project_level_notifications#reassign_issue ProjectLevelNotifications#reassign_issue}

---

##### `reassignMergeRequest`<sup>Optional</sup> <a name="reassignMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.reassignMergeRequest"></a>

```typescript
public readonly reassignMergeRequest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for merge request reassignments. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/project_level_notifications#reassign_merge_request ProjectLevelNotifications#reassign_merge_request}

---

##### `reopenIssue`<sup>Optional</sup> <a name="reopenIssue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.reopenIssue"></a>

```typescript
public readonly reopenIssue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for reopened issues. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/project_level_notifications#reopen_issue ProjectLevelNotifications#reopen_issue}

---

##### `reopenMergeRequest`<sup>Optional</sup> <a name="reopenMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.reopenMergeRequest"></a>

```typescript
public readonly reopenMergeRequest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for reopened merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/project_level_notifications#reopen_merge_request ProjectLevelNotifications#reopen_merge_request}

---

##### `successPipeline`<sup>Optional</sup> <a name="successPipeline" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.successPipeline"></a>

```typescript
public readonly successPipeline: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for successful pipelines. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/project_level_notifications#success_pipeline ProjectLevelNotifications#success_pipeline}

---



